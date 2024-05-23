import { verifyToken } from "../utils/verifyToken.js"


export const verifyTokenMiddleware = (req, res, next) => {
    const token = req.session.token;
    if(!token){
        return res.status(401).json({message:"Token de acceso no proporcionado"});
    }
    // const token = authHeader.substring(7);
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    }
    catch (error) {
    res.status(401).json({message:"Token de acceso invalido"}); 
    }

};