import * as joi from 'joi';
import { device } from '../entities/device';

export const findAll = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .array()
                .items(device)
                .label('devices'),
        }).label('Result'),
    },
    400: {
        description: 'Bad request',
        schema: joi.object({
            error: 'Bad Request',
        }).options({ allowUnknown: true }),
    },
};

export const createdDevice = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .object()
                .keys(device)
                .label('device'),
        }).label('Result'),
    },
    400: {
        description: 'Bad request',
        schema: joi.object({
            error: 'Bad Request',
        }).options({ allowUnknown: true }),
    },

};

export const updatedDevice = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .object()
                .keys(device)
                .label('device'),
        }).label('Result'),
    },
    400: {
        description: 'Bad request',
        schema: joi.object({
            error: 'Bad Request',
        }).options({ allowUnknown: true }),
    },
};
