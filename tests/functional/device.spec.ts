import * as chai from 'chai';
import * as R from 'ramda';
import * as responseSchema from '../../src/schemas/responses/device';
import { initServer } from '../../src/config/app';
import { initDi } from '../../src/config/di';
import { validateP } from '../utils/validate';
// tslint:disable-next-line

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

const validateResponseSchemaFor = (name, status?) =>
    validateP(R.path([name, R.or(status, 200), 'schema'], responseSchema));

describe(`api/devices`, () => {
    useServer(this);
    useViewContainer(this);

    it(`GET /devices`, async () => {
        await chai.request(this.server)
            .get(`/devices`)
            .set('content-type', 'application/json')
            .then(R.prop('body'))
            .then(validateResponseSchemaFor('findAll'));
    });

    it(`GET /devices?{filters}`, async () => {
        const page = 1;
        const limit = 1;
        const sort = 'asc';

        const data = await chai.request(this.server)
            .get(`/devices?page=${page}&limit=${limit}&sort=${sort}`)
            .set('content-type', 'application/json')
            .then(R.prop('body'))
            .then(R.prop('data'));
        data.should.have.lengthOf(limit);
    });

});
