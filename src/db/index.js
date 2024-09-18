import mongoose from "mongoose";
import {DB_name} from "../constants.js"

const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
      // const connectionInstance = await mongoose.connect("mongodb+srv://Abhishek:ABHISHEK123@cluster0.7qowz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      console.log(`MongoDB connected !! DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongo DB connection error", error);
        process.exit(1);
    }
}

export default connectDB;