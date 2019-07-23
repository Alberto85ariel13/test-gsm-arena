"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const R = require("ramda");
const glob_1 = require("glob");
const awilix_1 = require("awilix");
const createLoadModules = container => dirPath => container.loadModules(dirPath, { formatName: (name, descriptor) => R.or(descriptor.value.name, name) });
const createInjector = container => globPattern => glob_1.sync(globPattern)
    .map(require)
    .map(R.prop('default'))
    .map(container.build);
exports.createContainer = (opts = {}) => {
    const container = awilix_1.createContainer(opts);
    return {
        container,
        loadModules: createLoadModules(container),
        injectContainer: createInjector(container),
    };
};
