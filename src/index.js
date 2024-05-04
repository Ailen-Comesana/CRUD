// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import UserRoute from "./routes/userRoute.js";


// const  app= express();
// app.use(bodyParser.json());


// const MONGOURI= process.env.MONGODB_URI;

// mongoose.connect(MONGOURI).then(()=>{
//     console.log("Database connected")
//     app.listen(PORT,()=>{
//         console.log(`Server is running on port ${PORT}`)
//     })
//     }).catch(error => console.log(error));



//     app.get("/",(req,res)=>{
//         res.send("hello world");
//     });
    
//     app.use("/api/user", UserRoute);
