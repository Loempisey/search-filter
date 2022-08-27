const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
})
const User = mongoose.model('user', userSchema)
module.exports = User;
