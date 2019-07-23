import * as R from 'ramda';
import { sync } from 'glob';
import { createContainer as createAwilixContainer } from 'awilix';

const createLoadModules = container => dirPath =>
    container.loadModules(dirPath, { formatName: (name, descriptor) => R.or(descriptor.value.name, name) });

const createInjector = container => globPattern =>
    sync(globPattern)
        .map(require)
        .map(R.prop('default'))
        .map(container.build);

export const createContainer = (opts = {}) => {
    const container = createAwilixContainer(opts);

    return {
        container,
        loadModules: createLoadModules(container),
        injectContainer: createInjector(container),
    };
};
