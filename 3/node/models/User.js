const  mongoose = require('mongoose')

const schema =  mongoose.Schema
const userSchema =new mongoose.Schema({
phone:{
    type: String,
    unique: true,
    index: true,
    required: true,
},
    name:{
        type: String
    },
    email:{
        type: String
    },
 
    college_id_number:{
        type:String
    },
    profile_pic:{
        type: String
    },
    gender:{
        type: String
    },
    category:{
        type: String
    },department:{
        type: String
    }
},  { collection: 'user_details' },{timestamps:true})
const User=mongoose.model('User',userSchema)
module.exports= User