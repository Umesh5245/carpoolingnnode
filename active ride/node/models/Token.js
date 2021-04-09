const  mongoose = require('mongoose')

const schema =  mongoose.Schema
const tokenSchema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'AuthUser' },
    email: { type: String, unique: true },

    token: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

  const Token=mongoose.model('Token',tokenSchema)
module.exports= Token 