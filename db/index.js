const mongoose = require('mongoose')

const uri = ('mongodb://localhost:27017')

module.exports = mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true}).catch(e=>console.log(e))

