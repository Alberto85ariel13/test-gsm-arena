import * as sinon from 'sinon';
// import * as R from 'ramda';
import { initDi } from '../../../src/config/di';
import { fixtureData, data } from '../../fixtures/brand';
// tslint:disable-next-line
import MockFirebase = require('mock-cloud-firestore');

const useViewContainer = (context) => {
    before(async () => {
        if (context.container) return;
        context.container = await initDi();
    });
};

describe(`brand integration repository`, () => {
    useViewContainer(this);

    const sandbox = sinon.createSandbox();
    const mockFirebase = new MockFirebase(fixtureData(), { isNaiveSnapshotListenerEnabled: true });
    const db = mockFirebase.firestore();

    it(`repo brand create`, async () => {
        sandbox.stub(this.container.get('db'), 'collection')
            .onCall(0).returns(db.collection('brands'));
        db.collection('brands')['onSnapshot']((snapshot) => {
            chai.expect(snapshot.docs).to.lengthOf(4);
        });
        const repository = this.container.get('brandRepository');
        await repository.create(data.create);

        sandbox.reset();
        sandbox.restore();
    });
});
