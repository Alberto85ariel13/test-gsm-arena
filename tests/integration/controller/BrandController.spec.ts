import * as chai from 'chai';
import * as sinon from 'sinon';
import { initServer } from '../../../src/config/app';
import { initDi } from '../../../src/config/di';
import { data } from '../../fixtures/brand';

const useServer = (context) => {
    before(async () => {
        if (context.server) return;

        context.server = await initServer();
    });
};
const useViewContainer = (context) => {
    before(async () => {
        if (context.container) return;
        context.container = await initDi();
    });
};

describe(`api/brand`, () => {
    useServer(this);
    useViewContainer(this);

    const sandbox = sinon.createSandbox();
    before((done) => {
        const service = this.container.get('brandService');
        sandbox.stub(service, 'create')
            .resolves({ data: data.create });
        sandbox.stub(service, 'update')
            .resolves({ data: data.update });
        sandbox.stub(service, 'delete')
            .resolves({ data: {} });
        done();
    });

    after((done) => {
        sandbox.reset();
        sandbox.restore();
        done();
    });

    it(`POST /brands`, async () => {
        const result = await chai.request(this.server)
            .post(`/brands`)
            .send(data.create)
            .set('content-type', 'application/json');
        chai.expect(result['statusCode']).to.equal(200);
        chai.expect(result.body).to.eql({ data: data.create });
    });
    it(`POST /brands error 400`, async () => {
        const result = await chai.request(this.server)
            .post(`/brands`)
            .send({})
            .set('content-type', 'application/json');
        chai.expect(result['statusCode']).to.equal(400);
    });

    it(`PATCH /brands`, async () => {
        const result = await chai.request(this.server)
            .patch(`/brands/id`)
            .send(data.update)
            .set('content-type', 'application/json');
        chai.expect(result['statusCode']).to.equal(200);
        chai.expect(result.body).to.eql({ data: data.update });
    });
    it(`PATCH /brands error 400`, async () => {
        const result = await chai.request(this.server)
            .patch(`/brands/id`)
            .send({ fail: 0 })
            .set('content-type', 'application/json');
        chai.expect(result['statusCode']).to.equal(400);
    });

    it(`DELETE /brands`, async () => {
        const result = await chai.request(this.server)
            .del(`/brands/id`)
            .set('content-type', 'application/json');
        chai.expect(result['statusCode']).to.equal(200);
        chai.expect(result.body).to.eql({ data: {} });
    });
});
