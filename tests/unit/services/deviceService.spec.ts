import * as sinon from 'sinon';
import * as responseSchema from '../../../src/schemas/responses/device';
import { initDi } from '../../../src/config/di';
import { data } from '../../fixtures/device';

const useViewContainer = (context) => {
    before(async () => {
        if (context.container) return;
        context.container = await initDi();
    });
};

describe(`device services`, () => {
    useViewContainer(this);

    const sandbox = sinon.createSandbox();
    before((done) => {
        const repository = this.container.get('deviceRepository');
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

    it(`service device create`, async () => {
        const service = this.container.get('deviceService');
        const result = await service.create(data.create);
        await responseSchema.createdDevice[200].schema.validate(result);
    });
    it(`service device update`, async () => {
        const service = this.container.get('deviceService');
        const result = await service.update(data.update);
        await responseSchema.updatedDevice[200].schema.validate(result);
    });
    it(`service device delete`, async () => {
        const service = this.container.get('deviceService');
        const result = await service.delete(data.delete);
        chai.expect(result).to.eql({ data: {} });
    });

});
