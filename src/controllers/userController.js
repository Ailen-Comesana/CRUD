import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const create = async (req , res) =>{
    try { 
        const userData = new User (req.body);
        
        const {email}= userData;
        const userExist = await User.findOne({email});
        if (userExist){
            return res.status(400).json({message:`El usuario con ${email} ya existe`})
        }

        const savedUser= await userData.save();

        const { password, ...rest } = savedUser;
        res.status(200).json(rest);

    } catch (error) {
        res.status(500).json({message:"Internal server error",error})
    }

};


export const get = async (req , res)=>{
    try {
        const users= await User.find();
        if(users.length === 0){
            return res.status(404).json({message:"There are no users"});
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:"Internal server error", error})
        
    }

}


export const update = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findOne({_id: id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});   
        }
        const updateUser = await User.findByIdAndUpdate({_id: id}, req.body,{new: true});
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({message: "internal server error ", error})
        
    }
}


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findOne({_id});
        if(!userExist){
            return res.status(404).json({message:"User not found"}); 
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message: "User deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "internal server error ", error})
    }

}; 

export const validate = async (req,res) => {
    try {
        const userFound = await User.findOne({email: req.body.email});
        console.log(userFound);
        if(!userFound){
            res.status(400).json({message: "Email y/o contraseña son incorrectos"})
        }
        if(bcrypt.compareSync(req.body.password, userFound.password)){
          
            const payload = {
                userId: userFound._id,
                userEmail: userFound.email,
            };
            const token = jwt.sign(payload, "secreto", {expiresIn: "1h"});
            res.status(200).json({token});
           
        }else{
            res.status(400).json({message:"Email y/o contraseña son incorrectos"});
            return;
        }
    } catch (error) {
         res.status(500).json({message: "internal server error ", error})
    }
}
