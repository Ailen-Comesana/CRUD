import express from "express"
import { create, deleteProduct, findOne, getAll, update } from "../controllers/productController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const productRoute = express.Router();


//enrutador- verbo http- endpoint-controlador(maneja las peticiones: req y res)-servicio
productRoute.post( "/create",verifyTokenMiddleware, create);

productRoute.get ("/getAll", verifyTokenMiddleware, getAll);

productRoute.get ("/findOne/:name", verifyTokenMiddleware, findOne);

productRoute.put ("/update/:id",verifyTokenMiddleware, update);

productRoute.delete ("/delete/:id",verifyTokenMiddleware, deleteProduct);


export default productRoute;