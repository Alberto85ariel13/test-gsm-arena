"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const device_1 = require("../entities/device");
exports.findAll = {
    query: joi.object().keys({
        brand: joi.string(),
    }),
};
exports.create = {
    body: joi.object().keys(device_1.device).forbiddenKeys(['id'])
        .requiredKeys(['name', 'brand', 'model']),
};
exports.update = {
    params: joi.object().keys({
        id: joi.string().required(),
    }),
    body: joi.object().keys(device_1.device),
};
exports.remove = {
    params: joi.object().keys({
        id: joi.string().required(),
    }),
};
