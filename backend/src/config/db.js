import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(ENV.DB_URL);
    console.log(`Connected to MONGODB: ${connect.connection.host}`);
  } catch (err) {
    console.error("MONGODB connection error!!!");
    process.exit(1); //exit code 0 is success and 1 is failure
  }
};
