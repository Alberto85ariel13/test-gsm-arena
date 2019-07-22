import * as joi from 'joi';
import { device } from '../entities/device';

export const findAll = {
    query: joi.object().keys({
        brand: joi.string(),
    }),
};

export const findOneById = {
    params: {
        id: joi.string().required(),
    },
};

export const create = {
    body: joi.object().keys(device).forbiddenKeys(['id'])
        .requiredKeys(['name', 'brand', 'model']),
};

export const update = {
    params: joi.object().keys({
        id: joi.string().required(),
    }),
    body: joi.object().keys(device),
};

export const remove = {
    params: joi.object().keys({
        id: joi.string().required(),
    }),
};
