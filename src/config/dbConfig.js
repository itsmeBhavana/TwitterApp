import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to Mongo db");
  } catch (error) {
    console.log("Failed to connect to MongoDB");
    console.log(error);
  }
}
