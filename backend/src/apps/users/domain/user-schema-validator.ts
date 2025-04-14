import Joi from 'joi';

export const userSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required().min(8),
});

export const userUpdateSchema = Joi.object({
	name: Joi.string(),
	email: Joi.string().email(),
	password: Joi.string().min(8),
});
