// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";



dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(proces.env.PORT || 8000, ()=>{
        console.log(`Server is running at : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO DB  connnection failed!!",err);
})










// import express from "express"
// const app = express()
// //iffies
// ( async () =>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/
//         ${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("ERROR: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT,() =>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch(error){
//         console.error("ERROR: ",error)
//         throw error

//     }
// })()