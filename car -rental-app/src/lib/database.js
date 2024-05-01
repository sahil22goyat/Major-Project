import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw new Error("Connection Failed");
  }
};

export default connect;
