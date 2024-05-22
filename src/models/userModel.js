import mongoose from "mongoose";
import { isGoodPassword } from "../utils/validators.js";
import bcrypt from "bcrypt";


const carreraEnum = ["ingenieria", "desarrollo full stack", "data science", "data analytics"];


const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        maxlenght: 16,
        minlenght: 2,
        trim: true,
        lowercase: true
    },

    apellido:{
        type: String,
        required:true,
        maxlenght: 16,
        minlenght: 2,
        trim: true,
        lowercase: true
    },
    email:{
        type: String,
        required:true,
        maxlenght: 30,
        minlenght: 8,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
        unique: true
    },
    carrera:{
        type: String,
        required:true,
        enum: carreraEnum

    },

    edad:{
        type: Number,
        required:true,
        min: 17,
        max: 120
    },

    registrationDAte: {
        type: Date,
        default: Date.now()
    },

    password: {
        type: String,
        validate: {
        validator: function(value) {
            return isGoodPassword(value)
            
        },
        message: "The password must be between 6 and 12 characters,a numerical digit, a capital letter, a lowercase letter"
    }
    }


});

userSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password, 10)
    next();

})

export default mongoose.model("user", userSchema );