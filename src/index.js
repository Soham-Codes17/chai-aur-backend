import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path : "./env"
})
/*
import mongoose  from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
const app = express()

//database se jab bhi baat karo try catcha nd async await use 
// use karna hi hain


;(async () => {
    try {
        await mongoose.connect(`${mongoose.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: - ",error)
            throw error
        })

        app.listen(process.env.PORT ,()=>{
            console.log(`Application is listening on port
                ${process.env.PORT}`)
        }) 
    } catch (error) {
        console.log("ERROR: - ",error)
        throw error
    }
} ) ( )         
*/


connectDB()