const express = require('express')
const router = express.Router()
const {NOT_FOUND_MSG}  = require('../constants')

console.log('in Registration Area')


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

module.exports =    router