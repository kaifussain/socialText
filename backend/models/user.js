const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:false
    }
    
})
// Model
const userModel = mongoose.model('User',userSchema)
module.exports = userModel