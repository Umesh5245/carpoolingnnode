const  mongoose = require('mongoose')

const schema =  mongoose.Schema
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userhomeSchema =new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        index: true,
        lowercase: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    can_offer:{
    type: String,
    default: 'no'

},
offer_or_take:{
        type: String,
        
        default: 'take'

    },


},  { collection: 'user_home_detail' })
userhomeSchema.set('timestamps', true); 
const Userhome=mongoose.model('Userhome',userhomeSchema)
module.exports= Userhome