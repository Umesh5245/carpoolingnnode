const User =require('../models/User')

const index=(req,res,next)=>{
    User.find().then(response=>{
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
    User.find({phone:{ $regex: new RegExp(phone, "ig")   }
})
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired`
        })
        
    })
}

const store =(req,res,next)=>{
    let user= new User({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        college_id_number:req.body.college_id_number,
        profile_pic:req.body.profile_pic,
        gender:req.body.gender,
        category:req.body.category,
        department:req.body.department
    })
    

    user.save()
    .then(response =>{
        res.json({
            message:"employye added"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired ${error}`
        })
        
    })
}

const update =(req,res,next)=>{
    let name=req.body.name
    let updateData=  {

        userID: req.body.userID,
        dept:req.body.dept,
        phone:req.body.phone,
        college_id:req.body.college_id,
        category:req.body.category
    }
User.update(name,{ name: 'jason bourne' })    .then(response =>{
        res.json({
            message:"employye update"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired ${userID} `
        })
        
    })
}


const destroy =(req,res,next)=>{
    let userID=req.body.userID
   
User.findOneAndDelete(userID)    .then(response =>{
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
