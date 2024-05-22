import express from "express";
import { create, getAll } from "../controllers/categoryController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const categoryRoute = express.Router();

categoryRoute.get("/getAll", getAll);
categoryRoute.post("/create",verifyTokenMiddleware,create);

export default categoryRoute;