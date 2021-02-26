const Ride =require('../models/Ride')

const index=(req,res,next)=>{
    Ride.find().then(response=>{
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
    let phone= req.body.phone
   

    Ride.find({phone})
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired  ${phone}`
        })
        
    })
}

const store =(req,res,next)=>{
    let ride= new Ride({
        from: req.body.from,
        to:req.body.to,
        date:req.body.date,
        passenger:req.body.passenger,
        phone:req.body.phone
    })
    

    ride.save()
    .then(response =>{
        res.json({
            message:"employye added"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired`
        })
        
    })
}

const update =(req,res,next)=>{
    let rideID=req.body.rideID
    let updateData=  {
        from: req.body.from,
        to:req.body.to,
        date:req.body.date,
        passenger:req.body.passenger,
        phone:req.body.phone
    }
Ride.findByIdAndUpdate(rideID,{$set:updateData})    .then(response =>{
        res.json({
            message:"employye update"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired`
        })
        
    })
}


const destroy =(req,res,next)=>{
    let rideID=req.body.rideID
   
Ride.findOneAndDelete(rideID)    .then(response =>{
        res.json({
            message:"employye deletd"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired`
        })
        
    })
}
module.exports={index,show,store,update,destroy}      
