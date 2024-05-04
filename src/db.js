import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGOURI= process.env.MONGODB_URI;

export const connectDB= async () => {
    try {
        await mongoose.connect(MONGOURI);
        console.log("Database connected");
    } catch (error) {
       console.error("Error connnecting to database:", error);
       process.exit (1);
    }
};