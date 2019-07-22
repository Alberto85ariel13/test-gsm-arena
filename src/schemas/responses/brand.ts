import * as joi from 'joi';
import { brand } from '../entities/brand';

export const findAll = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .array()
                .items(brand)
                .label('brands'),
        }).label('Result'),
    },
    400: {
        description: 'Bad request',
        schema: joi.object({
            error: 'Bad Request',
        }).options({ allowUnknown: true }),
    },
};

export const createdBrand = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .object()
                .keys(brand)
                .label('brand'),
        }).label('Result'),
    },
    400: {
        description: 'Bad request',
        schema: joi.object({
            error: 'Bad Request',
        }).options({ allowUnknown: true }),
    },

};

export const updatedBrand = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .object()
                .keys(brand)
                .label('brand'),
        }).label('Result'),
    },
    400: {
        description: 'Bad request',
        schema: joi.object({
            error: 'Bad Request',
        }).options({ allowUnknown: true }),
    },
};
