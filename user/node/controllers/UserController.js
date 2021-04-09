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
    console.log(req.param('useremail'))
  let  email= req.param('useremail')
  let   phone= req.param('userphone')
  let    name= req.param('username')
  let    college_id= req.param('usercollege_id')
  let    dept= req.param('userdept')
  let      gender= req.param('usergender')
  let      category= req.param('usercategory')
  let      lat= req.param('userlat')
  let     long= req.param('userlong')
  let      photo_url= req.param('userphoto_url')
    User.find({name:{ $regex: new RegExp(name, "ig")},email:{ $regex: new RegExp(email, "ig")},phone:{ $regex: new RegExp(phone, "ig")},college_id:{ $regex: new RegExp(college_id, "ig")},dept:{ $regex: new RegExp(dept, "ig")},gender:{ $regex: new RegExp(gender, "ig")},category:{ $regex: new RegExp(category, "ig")},lat:{ $regex: new RegExp(lat, "ig")},long:{ $regex: new RegExp(long, "ig")},photo_url:{ $regex: new RegExp(photo_url, "ig")},} )
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
    let user= new User({
        email: req.param('useremail'),
        phone:req.param('userphone'),
        name:req.param('username'),
        college_id:req.param('usercollege_id'),
        dept:req.param('userdept'),
        gender:req.param('usergender'),
        category:req.param('usercategory'),
        lat:req.param('userlat'),
        long:req.param('userlong'),
        photo_url:req.param('userphoto_url')
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
    let  email= req.param('useremail')

    let updateData=  {

       
           phone: req.param('userphone'),
            name: req.param('username'),
            college_id:req.param('usercollege_id'),
            dept: req.param('userdept'),
              gender: req.param('usergender'),
              category: req.param('usercategory'),
              lat: req.param('userlat'),
             long: req.param('userlong'),
              photo_url:req.param('userphoto_url')
    }
    User.update({email}, updateData) .then(response =>{
        res.json({
            message:"User update"
        })
    })
    .catch(error=>{
        res.json({
            message:`am error occuiredXV`
        })
        
    })
}


const destroy =(req,res,next)=>{
    let email=req.body.useremail
   
User.findOneAndDelete(email)    .then(response =>{
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
