const Employee =require('../models/Employee')

const index=(req,res,next)=>{
    Employee.find().then(response=>{
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
    let employeeID= req.body.employeeID
    Employee.findById(employeeID)
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
    let employee= new Employee({
        name: req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })
    

    employee.save()
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
    let employeeID=req.body.employeeID
    let updateData=  {
        name: req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        avatar:req.body.avatar
    }
Employee.findByIdAndUpdate(employeeID,{$set:updateData})    .then(response =>{
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
    let employeeID=req.body.employeeID
   
Employee.findOneAndDelete(employeeID)    .then(response =>{
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