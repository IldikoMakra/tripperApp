const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(255).required(),

    city: Joi.string().min(3).max(255),
    age: Joi.number().min(15).max(120),
    imageUrl: Joi.string().min(6).max(255),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
