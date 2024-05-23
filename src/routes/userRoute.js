import express from "express"
import { create, deleteUser, destroySession, get, loginView, update, updateView, validate } from "../controllers/userController.js"
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";


const userRoute= express.Router();

//endpoints

userRoute.post("/create", create);

userRoute.put("/update/:id",verifyTokenMiddleware,update);

userRoute.delete("/deleteUser/:id",  verifyTokenMiddleware ,deleteUser);

userRoute.post("/login", validate);

userRoute.post("/logout", destroySession)

//vistas

userRoute.get("/create", (req , res)=>{
    res.render("create");
});

userRoute.get("/getAll",  verifyTokenMiddleware , get);

userRoute.get("/update/:id", updateView)

userRoute.get("/login", loginView)



export default userRoute;