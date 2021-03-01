const  mongoose = require('mongoose')

const schema =  mongoose.Schema
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema =new mongoose.Schema({
phone:{
    type: String,
    unique: true,
    index: true,
    required: true,
    default: ''

},
    name:{
        type: String,
        
        default: ''

    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    college_id_number:{
        type:String,
        default: ''

    },
    profile_pic:{
        type: String,
        default: ''

    },
    gender:{
        type: String,
        default: ''

    },
    category:{
        type: String,
        default: ''

    },department:{
        type: String,
        default: ''

    }
},  { collection: 'user_details' })
userSchema.set('timestamps', true); 
const User=mongoose.model('User',userSchema)
module.exports= User