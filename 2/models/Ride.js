const  mongoose = require('mongoose')

const schema =  mongoose.Schema
const rideSchema =new mongoose.Schema({
    from:{
        type: String
    },
    to:{
        type: String
    },
    date:{
        type: Date
    },
    passenger:{
        type:Number
    },
    phone:{
        type: String
    },
},  { collection: 'ride' },{timestamps:true})
const Ride=mongoose.model('Ride',rideSchema)
module.exports= Ride