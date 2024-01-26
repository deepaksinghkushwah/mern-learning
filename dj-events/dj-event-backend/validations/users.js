import Joi from "joi";
const registerValidation = async(data) => {
    const schema = Joi.object({
        firstname: Joi.string().min(3).required(),
        lastname: Joi.string().min(3).required(),
        email: Joi.string().email().min(5).required(),
        password: Joi.string().min(3).required(),
        age: Joi.number(),
      });

      return schema.validateAsync(data);
}


export default registerValidation;
