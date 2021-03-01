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

    let name= req.body.name
    let email= req.body.email
    let college_id_number= req.body.college_id_number
    let profile_pic= req.body.profile_pic
    let gender= req.body.gender
    let category= req.body.category
    let department= req.body.department

    User.find({phone:{ $regex: new RegExp(phone, "ig")   },name:{ $regex: new RegExp(name, "ig")},email:{ $regex: new RegExp(email, "ig")},college_id_number:{ $regex: new RegExp(college_id_number, "ig")},profile_pic:{ $regex: new RegExp(profile_pic, "ig")},gender:{ $regex: new RegExp(gender, "ig")},category:{ $regex: new RegExp(category, "ig")},department:{ $regex: new RegExp(department, "ig")}})
    .then(response =>{
        res.json({
            response,phone
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuired ${error}`
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
    let phone=req.body.phone
    let         name= req.body.name

    let updateData=  {

        name: req.body.name,
        email:req.body.email,
        college_id_number:req.body.college_id_number,
        profile_pic:req.body.profile_pic,
        gender:req.body.gender,
        category:req.body.category,
        department:req.body.department
    }
    User.update({phone}, updateData) .then(response =>{
        res.json({
            message:"employye update"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuiredXV`
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
