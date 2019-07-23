"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const getJson = path => JSON.parse(fs.readFileSync(path, 'utf8'));
const swaggerFile = getJson(`${process.cwd()}/swagger.json`);
const packageFile = getJson(`${process.cwd()}/package.json`);
exports.register = (server) => {
    swaggerFile.info = {
        title: packageFile.name,
        description: packageFile.description,
        version: packageFile.version,
    };
    swaggerFile.host = `${process.env.HOST}:${process.env.SWAGGER_PORT}`;
    swaggerFile.basePath = '/';
    server.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    return server;
};
