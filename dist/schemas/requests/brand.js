"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const brand_1 = require("../entities/brand");
exports.findAll = {
    query: joi.object().keys({}),
};
exports.create = {
    body: joi.object().keys(brand_1.brand)
        .requiredKeys(['name']),
};
exports.update = {
    params: joi.object().keys({
        id: joi.string().required(),
    }),
    body: joi.object().keys(brand_1.brand),
};
exports.remove = {
    params: joi.object().keys({
        id: joi.string().required(),
    }),
};
