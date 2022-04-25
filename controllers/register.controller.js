const Joi = require('joi')
const {SERVER_ERROR_MSG} = require('../constants')
const Registeration = require('../model/Registration')


const create = async(req,res)=>{

    try {
        const {name,mobile,email,message} = req.body
    const data ={
        name,
        mobile,
        email,
        message
    }

    const registerSchema = Joi.object({
        name: Joi.string().min(3).max(512).required,
        mobile: Joi.number.required,
        email:Joi.string().required,
        message: Joi.string()
    })

    const{error,value} = registerSchema.validate(data)
    if(error) return res.status(400).send(error.details[0].message)

    const register = await Registeration(data)
    res.send(register)

    }
    catch(error){
        console.log(`error in ${create.name},message : ${error.message}`)
        res.status(500).send(SERVER_ERROR_MSG)
    }

}

module.exports = {
    create
}