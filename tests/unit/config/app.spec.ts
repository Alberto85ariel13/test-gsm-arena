import * as sinon from 'sinon';
import * as app from '../../../src/config/app';

describe('config/app', () => {
    const sandbox = sinon.createSandbox();
    before((done) => {
        sandbox.stub(app, 'initServer')
            .resolves({
                listen: (port, cb) => cb(),
                on: (code, cb) => { },
            });
        done();
    });

    after((done) => {
        sandbox.reset();
        sandbox.restore();
        done();
    });

    it('startView', async () => {
        await app.startView();
    });
});
