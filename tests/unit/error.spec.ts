import * as sinon from 'sinon';
import { onError } from '../../src/config/app';
import { CustomError } from './CustomError';

const port = process.env.PORT;

describe('onError', () => {
    const sandbox = sinon.createSandbox();
    before(() => {
        sandbox.stub(process, 'exit');
    });

    after(() => {
        sandbox.reset();
        sandbox.restore();
    });

    it('onServerError EACCES', async () => {
        const customError = new CustomError();
        customError.code = 'EACCES';
        customError.message = 'message error from test';
        customError.syscall = 'listen';
        try {
            onError(port)(customError);
        } catch (error) {
            chai.expect(customError.message).to.eql(error.message);
        }
    });

    it('onServerError EADDRINUSE', async () => {
        const customError = new CustomError();
        customError.code = 'EADDRINUSE';
        customError.message = 'message error from test';
        customError.syscall = 'listen';
        try {
            onError(port)(customError);
        } catch (error) {
            chai.expect(customError.message).to.eql(error.message);
        }
    });

    it('onServerError default', async () => {
        const customError = new CustomError();
        customError.code = 'default';
        customError.message = 'message error from test';
        customError.syscall = 'listen';
        try {
            onError(port)(customError);
        } catch (error) {
            chai.expect(customError.message).to.eql(error.message);
        }
    });

});

it('onServerError default without shut down main process', async () => {
    const customError = new CustomError();
    customError.code = 'default';
    customError.message = 'message error from test';
    try {
        onError(+port)(customError);
    } catch (error) {
        chai.expect(customError.message).to.eql(error.message);
    }
});
