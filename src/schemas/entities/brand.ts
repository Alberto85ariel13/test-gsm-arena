import * as joi from 'joi';

export const brand = {
    id: joi.string().optional(),
    name: joi.string(),
    devices: joi.number().default(0),
};
