const  mongoose = require('mongoose')

const schema =  mongoose.Schema
const userSchema =new mongoose.Schema({
    name:{
        type: String
    },
    dept:{
        type: String
    },
    phone:{
        type: String
    },
    college_id:{
        type:String
    },
    category:{
        type: String
    },
},  { collection: 'user' },{timestamps:true})
const User=mongoose.model('User',userSchema)
module.exports= User