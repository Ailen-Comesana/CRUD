// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";



// export const validate = async (req,res) => {
//     try {
//         const userFound = await User.findOne({email: req.body.email});
//         console.log(userFound);
//         if(!userFound){
//             res.status(400).json({message: "Email y/o contraseña son incorrectos"})
//         }
//         if(bcrypt.compareSync(req.body.password, userFound.password)){
//             const payload = {
//                 userId: userFound._id,
//                 userEmail: userFound.email,
//             };
//             const token = jwt.sign(payload, "secreto", {expiresIn: "1h"});
//             res.status(200).json({token});
//         }else{
//             res.status(400).json({message:"Email y/o contraseña son incorrectos"});
//             return;
//         }
//     } catch (error) {
//         res.status(500).json({message: "internal server error ", error})
//     }
// }
