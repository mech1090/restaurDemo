const mongoose = require('mongoose')
const schemaDefination = {
    name:{
        type:String,
        required : [true,'name is Required']
    },
    mobile:{
        type:Number,
        required:[true,'mobile number is Required']
    },
    email:{
        type:String,
        required : [true,'Email is Required']
    },
    
    message:{
        type:String
    }
}
const registrationSchema = new mongoose.Schema(schemaDefination)
const Registration = mongoose.model('Registration',registrationSchema)

module.exports = Registration