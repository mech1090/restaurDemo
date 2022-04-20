const express = require('express')
const pug = require('pug')
const app = express()
const mongoose = require('mongoose')
const res = require('express/lib/response')

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

mongoose.connection.once('open',()=>{
    app.listen(3000,()=>{
        console.log('Server is running on Port 3000')
    })
    console.log('Connection Successful')
})

