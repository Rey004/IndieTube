import dotenv from "dotenv";
dotenv.config({
    path: "./env"
});

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    application.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    throw error;
});





/*-------------------------------------------------------------------------------------------------------------------------------*/

/* First Approach

import express from "express";
const app = express();

(async () => {
    try{
        await mongoose.connect(`
            ${process.env.MONGO_URI}/
            ${DB_NAME}`,)
            app.on('error', (error) => {
                console.error('MongoDB connection error:', error);
            });

            app.listen(process.env.PORT || 3000, () => {
                console.log(`Server is running on port ${process.env.PORT || 3000}`);
            });
        console.log('Connected to MongoDB');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
})()

*/