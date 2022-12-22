const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, required: true}
},
{timestamps: {createdAt: 'created_at'}})

module.exports = mongoose.model('user', userSchema)