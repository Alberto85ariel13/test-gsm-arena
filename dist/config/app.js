"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const celebrate_1 = require("celebrate");
const swagger_1 = require("./swagger");
const di_1 = require("./di");
const logger_1 = require("../utils/logger");
exports.onError = port => (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
};
exports.initServer = () => __awaiter(this, void 0, void 0, function* () {
    const container = yield di_1.initDi();
    routing_controllers_1.useContainer(container);
    const app = routing_controllers_1.createExpressServer({
        controllers: [`${__dirname}/../controllers/*{.ts,.js}`],
    });
    swagger_1.register(app);
    app.use(celebrate_1.errors());
    return app;
});
const port = process.env.PORT;
exports.startView = () => __awaiter(this, void 0, void 0, function* () {
    const server = yield exports.initServer();
    server.listen(port, () => {
        logger_1.logger.info(`Listening on ${process.env.HOST}:${process.env.PORT}`);
    });
    server.on('error', exports.onError(port));
});
