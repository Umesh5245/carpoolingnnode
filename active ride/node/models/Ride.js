const  mongoose = require('mongoose')

const schema =  mongoose.Schema
const rideSchema =new mongoose.Schema({
    phone_no:{
        type: String
    },
    vehile_type:{
        type: String
    },
    vehicle_name:{
        type: Date
    },
    source_place:{
        type:Number
    },
    destination_place:{
        type: String
    },
    total_ride_cost:{
        type: String
    },
    number_plate:{
        type: String
    },
    number_plate_photo:{
        type: String
    },
    intermidiate_stops:{
        type: String
    },
    start_time:{
        type: String
    },  
    end_time:{
        type: String
    },
    seats_left:{
        type: String
    },
    all_not:{
        type: String,
        default: 'yes'

    },
},  { collection: 'ride' },{timestamps:true})
const Ride=mongoose.model('Ride',rideSchema)
module.exports= Ride