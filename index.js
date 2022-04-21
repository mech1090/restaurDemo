const express = require('express')
const pug = require('pug')
const app = express()
const mongoose = require('mongoose')
const res = require('express/lib/response')
const {NOT_FOUND_MSG}  = require('./constants')
require('dotenv').config()

require('./db')


app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app. set('view engine', 'pug')
app.set('views','./views')


app.get('/',(req,res)=>{
    res.send('OK')
})


app.get('/Demo',(req,res)=>{
    console.log('IN RENDER AREA')
    res.render('restaurDemo/layout',{
        pageTitle:'Panini',
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'

    })
})


app.get('/register',(req,res)=>{
    console.log('IN Register Area')
    res.render('register/layout1',{
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'
    })
    
})

app.post('/register',(req,res)=>{
    console.log(req.body)
    res.render('register/layout1',{
        pageHeader:'Gourmet Italian Grilled Sandwiches & More!'
    })
} 
)

const PORT = process.env.PORT || 3000

mongoose.connection.once('open',()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on Port ${PORT}`)
    })
    console.log('Connection Successful')
})

