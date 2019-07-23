"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
exports.logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    format: winston.format.json(),
    defaultMeta: { service: 'msg-arena-service' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
    ],
});
