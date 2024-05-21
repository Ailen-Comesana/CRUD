import express from "express"
import { create, deleteProduct, findOne, getAll, update } from "../controllers/productController.js";

const productRoute = express.Router();


//enrutador- verbo http- endpoint-controlador(maneja las peticiones: req y res)-servicio
productRoute.post( "/create",create);
productRoute.get ("/getAll", getAll);
productRoute.put ("/update/:id", update);
productRoute.delete ("/delete/:id", deleteProduct);


export default productRoute;