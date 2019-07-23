"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
exports.brand = {
    id: joi.string().optional(),
    name: joi.string(),
    devices: joi.number().default(0),
    url: joi.string(),
};
