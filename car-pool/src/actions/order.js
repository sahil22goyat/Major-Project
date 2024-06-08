"use server";

import connect from "@/lib/database";
import { sendEmail } from "@/lib/sendEmail";
import Order from "@/models/Order";

export const orderedMail = async (id) => {
  try {
    await connect();
    const getOrder = await Order.findById(id);
    await sendEmail({
      order: getOrder,
      email: getOrder.email,
      subject: "welcome to car pool",
      message: `hey there, you have a booking from car pool`,
    });

    await sendEmail({
      order: getOrder,
      email: "sahilgoyatssn@gmail.com",
      subject: "welcome to car pool",
      message: `hey there, you have booking from car pool`,
    });
    return getOrder;
  } catch (error) {}
};
