const express = require('express')
const pug = require('pug')
const app = express()

app. set('view engine', 'pug')
app.set('views','./views')
app.get('/',(req,res)=>{
    res.send('OK')
})
app.listen(3000,()=>{
    console.log('Server is running on Port 3000')
})