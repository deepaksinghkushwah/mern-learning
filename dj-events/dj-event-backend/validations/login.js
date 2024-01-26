import Joi from "joi";
const loginValidation = async(data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required(),        
      });

      return schema.validateAsync(data);
}


export default loginValidation;
