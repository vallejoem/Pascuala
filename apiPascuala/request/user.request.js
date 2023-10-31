const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest')

const validateUser = (req,resp,next)=>{
    const schema = Joi.object({
        email: Joi.string().email().required().message({
            'any.required': "Ingrese su email",
            'string.email': "Debe ingresar su usuario"
        }),
        password:Joi.string().required().min(6)
    });

    validateRequest(req,resp,next,schema)
}

module.exports = validateUser;