const  mongoose = require('mongoose')

const schema =  mongoose.Schema
const emailSchema =new mongoose.Schema({
    to:{
        type: String
    },
    subject:{
        type: String
    },
    text:{
        type:String
    }
},  { collection: 'emailinfo' },{timestamps:true})
const Email=mongoose.model('Email',emailSchema)
module.exports= Email