const mongoose = require('mongoose')
const schemaDefination = {
    name:{
        type:String,
        required : [true,'name is Required']
    },
    email:{
        type:String,
        required : [true,'name is Required']
    },
    mobile:{
        type:Number,
        required:[true,'name is Required']
    },
    message:{
        type:String
    }
}
const productSchema = new mongoose.Schema(schemaDefination)
const Product = mongoose.model('Product',productSchema)
module.exports = Product