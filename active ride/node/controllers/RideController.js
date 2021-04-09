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
    let phone= req.param('phone')
   
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
        from: req.param('from'),
        to:req.paam('to'),
        date:req.param('date'),
        passenger:req.param('passenger'),
        phone:req.param('phone')
    })
    

    ride.save()
    .then(response =>{
        res.json({
            message:"ride added"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired`
        })
        
    })
}

const update =(req,res,next)=>{
    let rideID=req.param('rideID')
    let updateData=  {
        from: req.param('from'),
        to:req.param('to'),
        date:req.param('date'),
        passenger:req.param('passenger'),
        phone:req.param('phone'),
        all_not:req.param('all_not')
    }
Ride.findByIdAndUpdate(rideID,{$set:updateData})    .then(response =>{
        res.json({
            message:"ride update"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired`
        })
        
    })
}


const destroy =(req,res,next)=>{
    let rideID=req.param('rideID')
   
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
