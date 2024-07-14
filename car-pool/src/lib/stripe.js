"use server";

import Order from "@/models/Order";
import connect from "./database";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const PaymentMethod = async (body) => {
  try {
    await connect();
    const newOrder = await Order.create(body);

    const transformedItem = [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: body.title,
          },
          unit_amount: body.price * 100,
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: transformedItem,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/success/${newOrder._id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/cancel`,
    });  
   
    if (session && session.url) {
      return session.url;
    } else {
      throw new Error("Invalid session or session URL not found");
    }
  } catch (error) {
    console.error("Error in PaymentMethod:", error);
    throw error;
  }
}