const authenic  = (req,res,next)=>{
    console.log('Middle ware before the Routes')
    next()
}

module.exports = {
    authenic
}