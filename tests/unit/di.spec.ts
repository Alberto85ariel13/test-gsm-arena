import { expect } from 'chai';
import { createContainer } from '../../src/utils/di';

describe('shared/utils/di', () => {
    it('injects a container into a files found via a glob pattern', () => {
        const { container, injectContainer } = createContainer();
        const [testInjectContainer] = injectContainer(`${__dirname}/di/*.ts`);

        expect(testInjectContainer.container).to.deep.equal(container.cradle);
    });

    it('injects and registers modules on the container', () => {
        const { loadModules } = createContainer();
        const container = loadModules(`${__dirname}/di/*.ts`);

        expect(container.cradle.TestInjectContainer).to.not.be.null;
    });
});
