import * as joi from 'joi';

export const device = {
    id: joi.string().optional(),
    name: joi.string(),
    brand: joi.string(),
    model: joi.string(),
};
