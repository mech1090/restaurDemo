const express = require('express')
const router = express.Router()
const Validator = require('validatorjs')
const Joi = require('joi')

const {NOT_FOUND_MSG}  = require('../constants')

console.log('in Registration Area')

//const {name, mobile, email, message} = req.body
/*const data = {
    name,
    mobile,
    email,
    message
}
*/

router.get('/',(req,res)=>{
    console.log('IN Register Area')
    res.render('register/layout1',{
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'
    })
    
})



router.post('/',(req,res)=>{
    console.log('inside post')
    console.log(req.body)
    res.render('register/layout1',{
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'
    })
} 
)



//router.post('/',registrationController.create)

module.exports =    router