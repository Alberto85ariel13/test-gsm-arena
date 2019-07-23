import * as sinon from 'sinon';
import * as responseSchema from '../../../src/schemas/responses/brand';
import { initDi } from '../../../src/config/di';
import { data } from '../../fixtures/brand';

const useViewContainer = (context) => {
    before(async () => {
        if (context.container) return;
        context.container = await initDi();
    });
};

describe(`brand services`, () => {
    useViewContainer(this);

    const sandbox = sinon.createSandbox();
    before((done) => {
        const repository = this.container.get('brandRepository');
        sandbox.stub(repository, 'create')
            .resolves(data.create);
        sandbox.stub(repository, 'update')
            .resolves(data.update);
        sandbox.stub(repository, 'delete')
            .resolves({});
        done();
    });

    after((done) => {
        sandbox.reset();
        sandbox.restore();
        done();
    });

    it(`service brand create`, async () => {
        const service = this.container.get('brandService');
        const result = await service.create(data.create);
        await responseSchema.createdBrand[200].schema.validate(result);
    });
    it(`service brand update`, async () => {
        const service = this.container.get('brandService');
        const result = await service.update(data.update);
        await responseSchema.updatedBrand[200].schema.validate(result);
    });
    it(`service brand delete`, async () => {
        const service = this.container.get('brandService');
        const result = await service.delete(data.delete);
        chai.expect(result).to.eql({ data: {} });
    });

});
