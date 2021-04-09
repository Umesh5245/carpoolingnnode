const  mongoose = require('mongoose')

const schema =  mongoose.Schema
var otpuserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },

    otp:   { type: String, required: true }

   
  }, { collection: 'otpuser' });

  const OtpUser=mongoose.model('OtpUser',otpuserSchema)
module.exports= OtpUser 