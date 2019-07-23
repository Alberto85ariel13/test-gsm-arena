"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
exports.device = {
    id: joi.string().optional(),
    name: joi.string(),
    brand: joi.string(),
    model: joi.string(),
};
