const mongoose = require('mongoose')

//const uri = ('mongodb://localhost:27017')
const uri = ('mongodb+srv://root:Calgary200@cluster0.ch9tl.mongodb.net/ProjectNodejs?retryWrites=true&w=majority')

module.exports = mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true}).catch(e=>console.log(e))

