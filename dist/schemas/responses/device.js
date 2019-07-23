"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const device_1 = require("../entities/device");
exports.findAll = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .array()
                .items(device_1.device)
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
exports.createdDevice = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .object()
                .keys(device_1.device)
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
exports.updatedDevice = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .object()
                .keys(device_1.device)
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
