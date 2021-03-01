const Chat =require('../models/Chat')

const index=(req,res,next)=>{
    Chat.find().then(response=>{
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
    let from= req.body.from

    let to= req.body.to
    let messsage= req.body.messsage


    Chat.find({from:{ $regex: new RegExp(from, "ig")   },to:{ $regex: new RegExp(to, "ig")},messsage:{ $regex: new RegExp(messsage, "ig")}})
    .then(response =>{
        res.json({
            response,messsage
        })
    })
    .catch(error=>{
        res.json({
            messages:`am error occuired ${error}`
        })
        
    })
}

const store =(req,res,next)=>{
    let chat= new Chat({
        from: req.body.from,
        to:req.body.to,
        messsage:req.body.messsage
    })
    

    chat.save()
    .then(response =>{
        res.json({
            messagfe:"employye added"
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

 
    }
    Chat.update({phone}, updateData) .then(response =>{
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
    let chatID=req.body.chatID
   
Chat.findOneAndDelete(chatID)    .then(response =>{
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
