import * as winston from 'winston';
export const logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    format: winston.format.json(),
    defaultMeta: { service: 'msg-arena-service' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
    ],
});
