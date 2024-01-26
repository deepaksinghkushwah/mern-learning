import Joi from "joi";
const propertyValidation = async (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    slug: Joi.string(),
    description: Joi.string(),
    images: Joi.array(),
    type: Joi.string(),

    address: Joi.object({
      street: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      zip: Joi.string(),
    }),
    bhk: Joi.number(),
    floors: Joi.number(),
    plotSize: Joi.number(),
    price: Joi.number(),    
    dealer: Joi.object({
      name: Joi.string(),
      contactNumber: Joi.string(),
      email: Joi.string()
    }),
    readyToMove: Joi.boolean(),
    created_at: Joi.date(),
    created_by: Joi.string(),
    updated_at: Joi.date(),
    updated_by: Joi.string(),
  });

  return schema.validateAsync(data);
};

export default propertyValidation;
