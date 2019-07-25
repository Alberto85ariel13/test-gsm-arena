import * as chai from 'chai';
import * as sinon from 'sinon';
import * as R from 'ramda';
import * as responseSchema from '../../src/schemas/responses/brand';
import { initServer } from '../../src/config/app';
import { initDi } from '../../src/config/di';
import * as db from '../../src/config/db';
import { data } from '../fixtures/brand';
// tslint:disable-next-line

const useDb = (context) => {
    const sandbox = sinon.createSandbox();
    before(async () => {
        sandbox.stub(db, 'initDatabaseConnection').resolves({ collection: () => { } });
    });
    after(async () => {
        sandbox.reset();
        sandbox.restore();
    });
};

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
    useDb(this);
    useServer(this);
    useViewContainer(this);

    const sandbox = sinon.createSandbox();
    beforeEach((done) => {
        sandbox.stub(this.container.get('db'), 'collection')
            .onCall(0)
            .returns({
                get: () => Promise.resolve(data.findAll),
            });
        done();
    });

    afterEach((done) => {
        sandbox.reset();
        sandbox.restore();
        done();
    });

    it(`GET /brands`, async () => {
        const result = await chai.request(this.server)
            .get(`/brands`)
            .set('content-type', 'application/json')
            .then(R.prop('body'));
        await responseSchema.findAll[200].schema.validate(result);
        chai.expect(result['data']).to.have.lengthOf(data.findAll.length);
    });
});
