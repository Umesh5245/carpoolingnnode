const Activeride =require('../models/Activeride')

const moment = require('moment')
const index=(req,res,next)=>{
    Activeride.find().then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'an eror occored'
        })
    })
}
const show =(req,res,next)=>{
  let  ufrom= req.param('from')
  let   date= req.param('date')
  let    dept_time= req.param('dept_time')
  let    arr_time= req.param('arr_time')
  let    source= req.param('source')
  let      dest= req.param('dest')
  let      intermidiate= req.param('intermidiate')
  let      capacity= req.param('capacity')
  let     vehicle_type= req.param('vehicle_type')
  let      cost_per_ride= req.param('cost_per_ride')
  let      all_not= req.param('all_not')
 
  Activeride.find({from:{ $regex: new RegExp(ufrom, "ig")},source:{ $regex: new RegExp(source, "ig")},dest:{ $regex: new RegExp(dest, "ig")},capacity:{ $regex: new RegExp(capacity, "ig")},vehicle_type:{ $regex: new RegExp(vehicle_type, "ig")},cost_per_ride:{ $regex: new RegExp(cost_per_ride, "ig")},dept_time:{ $regex: new RegExp(dept_time, "ig")},arr_time:{ $regex: new RegExp(arr_time, "ig")},intermidiate:{ $regex: new RegExp(intermidiate, "ig")},all_not:{ $regex: new RegExp(all_not, "ig")},} )
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired ${error}`
        })
        
    })
}

const store =(req,res,next)=>{
    let activeride= new Activeride({
        from: req.param('from'),
        date:req.param('date'),
        dept_time:req.param('dept_time'),
        arr_time:req.param('arr_time'),
        source:req.param('source'),
        dest:req.param('dest'),
        intermidiate:req.param('intermidiate'),
        capacity:req.param('capacity'),
        vehicle_type:req.param('vehicle_type'),
        cost_per_ride:req.param('cost_per_ride')
    })
    

    activeride.save()
    .then(response =>{
        res.json({
            message:"ride added"
        })
    })
    .catch(error=>{
        res.json({
            message:`am errorv occuired ${error}`
        })
        
    })


}

const update =(req,res,next)=>{
    var mongoose = require('mongoose');
    var _id = mongoose.mongo.ObjectId("606ff95187d36c0004081b75");


    let updateData=  {

        from:req.param('from'),
        date:req.param('date'),
        dept_time:req.param('dept_time'),
        arr_time:req.param('arr_time'),
        source:req.param('source'),
        dest:req.param('dest'),
        intermidiate:req.param('intermidiate'),
        capacity:req.param('capacity'),
        vehicle_type:req.param('vehicle_type'),
        cost_per_ride:req.param('cost_per_ride'),
        all_not:req.param('all_not')

    }
    Activeride.findByIdAndUpdate({_id}, updateData) .then(response =>{
        res.json({
            message:"Ride update"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error  ${error}`
        })
        
    })
}


const destroy =(req,res,next)=>{
    let  email= req.param('useremail')
   console.log("fs"+email)
   Activeride.findOneAndRemove(email)    .then(response =>{
        res.json({
            message:"user deleted"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired`
        })
        
    })
}


module.exports={index,show,store,update,destroy}      
