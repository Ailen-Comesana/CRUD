import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config.js";
import {connectDB} from "./db.js"
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";


const  app= express();
app.use(bodyParser.json());

//base de datos
connectDB();

//prueba
app.get("/",(req,res) => {
    res.send("hello world");
});


app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
});

//rutas usuario

app.use("/api/user", userRoute);



//rutas de producto

app.use("/api/product", productRoute);