const express = require('express')
const pug = require('pug')
const app = express()
const mongoose = require('mongoose')
const res = require('express/lib/response')
const {NOT_FOUND_MSG}  = require('./constants')
const Validator = require('validatorjs')
const Joi = require('joi')
require('dotenv').config()
const {authenic} = require('./middleware/authen')
const register = require('./routes/registration')

require('./db')

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(authenic)
app.use('/register',register)


app. set('view engine', 'pug')
app.set('views','./views')


app.get('/',(req,res)=>{
    res.send('OK')
})


app.get('/Home',(req,res)=>{
    console.log('IN RENDER AREA')
    res.render('restaurDemo/layout',{
        pageTitle:'Panini',
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'

    })
})






app.get('*',(req,res)=>{
    res.status(404).send(NOT_FOUND_MSG)
})

const PORT = process.env.PORT || 3000

mongoose.connection.once('open',()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on Port ${PORT}`)
    })
    console.log('Connection Successful')
})

