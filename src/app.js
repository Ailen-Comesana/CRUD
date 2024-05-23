import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config.js";
import {connectDB} from "./db.js"
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import { engine } from "express-handlebars";
import methodOverride from "method-override";
import session from "express-session";


const  app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: false
}))

//Template engine

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views")

//base de datos
connectDB();

//prueba
app.get("/",(req, res) => {
    res.render("home");
});


app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
});

//rutas usuario

app.use("/api/user", userRoute);



//rutas de producto

app.use("/api/product", productRoute);

//rutas de categorias
app.use("/api/category", categoryRoute);

