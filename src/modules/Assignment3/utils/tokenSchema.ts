import Joi from 'joi';

export const tokenSchema = Joi.object({
  id: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  role: Joi.string().valid('user', 'admin').required(),
  iat: Joi.number().required(),
  exp: Joi.number().required()
});
