import User from "../models/userModel.js";

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

} 


