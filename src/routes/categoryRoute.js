import express from "express";
import { create, getAll } from "../controllers/categoryController.js";

const categoryRoute = express.Router();

categoryRoute.get("/getAll", getAll);
categoryRoute.post("/create", create);

export default categoryRoute;