const  mongoose = require('mongoose')

const schema =  mongoose.Schema
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const activerideSchema =new mongoose.Schema({
    from: {
        type: String,
        lowercase: true,
    }, 
    date:{
    type: Date,
    default: ''

},
    dept_time:{
        type: String,
        
        default: ''

    },

    arr_time:{
        type:String,
        default: ''

    },
    source:{
        type: String,
        default: ''

    },
    dest:{
        type: String,
        default: ''

    },
    intermidiate:{
        type: [String],
        default: ''

    },capacity:{
        type: String,
        default: ''

    }
    ,vehicle_type:{
        type: String,
        default: ''

    },cost_per_ride:{
        type: String,
        default: ''

    },
    all_not:{
        type: String,
        default: 'yes'

    },
},  { collection: 'activeride_details' })
activerideSchema.set('timestamps', true); 
const Activeride=mongoose.model('Activeride',activerideSchema)
module.exports= Activeride