const  mongoose = require('mongoose')

const schema =  mongoose.Schema
var authuserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    roles: [{ type: 'String' }],
    isVerified: { type: Boolean, default: false },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date
  });

  const AuthUser=mongoose.model('AuthUser',authuserSchema)
module.exports= AuthUser