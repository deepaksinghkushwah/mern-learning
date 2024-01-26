import Joi from "joi";
const eventValidation = async(data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        slug: Joi.string(),
        description: Joi.string(),
        venue: Joi.string(),
        performers: Joi.string(),
        address: Joi.string(),
        image: Joi.string(),
        event_date: Joi.date(),
        event_time: Joi.string(),
      });

      return schema.validateAsync(data);
}

export default eventValidation;