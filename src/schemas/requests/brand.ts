import * as joi from 'joi';
import { brand } from '../entities/brand';

export const findAll = {
    query: joi.object().keys({}),
};

export const create = {
    body: joi.object().keys(brand)
        .requiredKeys(['name']),
};

export const update = {
    params: joi.object().keys({
        id: joi.string().required(),
    }),
    body: joi.object().keys(brand),
};

export const remove = {
    params: joi.object().keys({
        id: joi.string().required(),
    }),
};
