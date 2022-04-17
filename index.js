const express = require('express')
const pug = require('pug')
const app = express()
app.use(express.static('public'))

app. set('view engine', 'pug')
app.set('views','./views')
app.get('/',(req,res)=>{
    res.send('OK')
})

app.get('/Demo',(req,res)=>{
    console.log('IN RENDER AREA')
    res.render('index.pug',{
        pageTitle:'Paninos',
        isauthenticated: true,
        pageHeader:'HOME'

    })
})

app.listen(3000,()=>{
    console.log('Server is running on Port 3000')
})