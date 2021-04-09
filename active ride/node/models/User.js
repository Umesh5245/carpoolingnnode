const  mongoose = require('mongoose')

const schema =  mongoose.Schema
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema =new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        index: true,
        lowercase: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    phone:{
    type: String,
    default: ''

},
    name:{
        type: String,
        
        default: ''

    },

    college_id:{
        type:String,
        default: ''

    },
    dept:{
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

    },lat:{
        type: String,
        default: ''

    }
    ,long:{
        type: String,
        default: ''

    },photo_url:{
        type: String,
        default: ''

    },dob:{
        type: String,
        default: ''

    },adhar_id:{
        type: String,
        default: ''

    },
    
},  { collection: 'user_details' })
userSchema.set('timestamps', true); 
const User=mongoose.model('User',userSchema)
module.exports= User