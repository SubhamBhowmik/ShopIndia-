import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        index:true,
        ///for fast searching we ned to indexing the data of mongodb 

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
       
    },
    phone:{
        type:String,
        required:true,
        
    }



})

const user=mongoose.model('user',userschema);
export default user;
