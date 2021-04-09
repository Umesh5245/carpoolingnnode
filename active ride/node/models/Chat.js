const  mongoose = require('mongoose')

const schema =  mongoose.Schema
const chatSchema =new mongoose.Schema({
from:{
    type: String

},
    to:{
        type: String


    },
    messsage:{
        type: String

    }
    
},  { collection: 'chat_details' })
chatSchema.set('timestamps', true); 
const Chat=mongoose.model('Chat',chatSchema)
module.exports= Chat