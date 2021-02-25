const  mongoose = require('mongoose')

const schema =  mongoose.Schema
const employeeSchema =new mongoose.Schema({
    name:{
        type: String
    },
    designation:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type:String
    },
    age:{
        type: Number
    },
},  { collection: 'userinfo' },{timestamps:true})
const Employee=mongoose.model('Employee',employeeSchema)
module.exports= Employee