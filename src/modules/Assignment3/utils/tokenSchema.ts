import Joi from 'joi';

export const tokenSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  iat: Joi.number().required(),
  exp: Joi.number().required(),
});
