import mongoose from "mongoose";

const { Schema } = mongoose;

const statusEnum = ["AVAILABLE", "NOT AVAILABLE", "DISCONTINUED"];

const productSchema = new Schema({

    name:{
        type: String,
        required:[true, "Name field is required"],
        minlenght: 3,
        unique: true,
        lowercase: true,
        trim: true,

    },

    price:{
        type: Number,
        required:[true, "Price field is required"],
        min:[0, "Price field has to be a number"],
        get: function(value){
            return value* 1.21;
        },
    },

    description:String,
    quantity: Number,
    status:{
        type: String, 
        validate: function(v){
            return statusEnum.includes(v);
        },
        message: props => `${props.value} No es un estado valido`

    },
    category: String,
    destacado: Boolean
});


productSchema.set("toJSON", {gettters: true, setters: true});

export default mongoose.model("Product", productSchema);