"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const brand_1 = require("../entities/brand");
exports.findAll = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .array()
                .items(brand_1.brand)
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
exports.createdBrand = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .object()
                .keys(brand_1.brand)
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
exports.updatedBrand = {
    200: {
        description: 'Success',
        schema: joi.object({
            data: joi
                .object()
                .keys(brand_1.brand)
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
