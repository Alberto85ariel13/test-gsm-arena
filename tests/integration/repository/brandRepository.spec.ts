import * as sinon from 'sinon';
import { initDi } from '../../../src/config/di';
import { fixtureData, data } from '../../fixtures/brand';
// tslint:disable-next-line
import MockFirebase = require('mock-cloud-firestore');

const useViewContainer = (context) => {
    before(async () => {
        context['container'] = await initDi();
    });
};

describe(`brand integration repository`, function (): void {
    useViewContainer(this);

    it(`brand create`, async () => {
        const sandbox = sinon.createSandbox();
        const mockFirebase = new MockFirebase(fixtureData(), { isNaiveSnapshotListenerEnabled: true });
        const db = mockFirebase.firestore();
        sandbox.stub(this['container'].get('db'), 'collection')
            .withArgs('brands').returns(db.collection('brands'));
        db.collection('brands')['onSnapshot']((snapshot) => {
            chai.expect(snapshot.docs).to.lengthOf(4);
        });
        const repository = this['container'].get('brandRepository');
        await repository.create(data.create);

        sandbox.reset();
        sandbox.restore();
    });

    it(`brand update`, async () => {
        const sandbox = sinon.createSandbox();
        const mockFirebase = new MockFirebase(fixtureData(), { isNaiveSnapshotListenerEnabled: true });
        const db = mockFirebase.firestore();
        sandbox.stub(this['container'].get('db'), 'collection')
            .withArgs('brands').returns(db.collection('brands'));

        const stub = sinon.stub();
        db.collection('brands')['onSnapshot'](stub);
        const repository = this['container'].get('brandRepository');
        await repository.update(data.update);
        const newUpdate = { id: data.update.id, name: 'newTest' };
        await repository.update(newUpdate);
        await new Promise((resolve) => {
            setTimeout(() => {
                chai.expect(stub.callCount).to.equal(2);
                resolve();
            },         100);
        });

        sandbox.reset();
        sandbox.restore();
    });

    it(`brand delete`, async () => {
        const sandbox = sinon.createSandbox();
        const mockFirebase = new MockFirebase(fixtureData(), { isNaiveSnapshotListenerEnabled: true });
        const db = mockFirebase.firestore();
        sandbox.stub(this['container'].get('db'), 'collection')
            .withArgs('brands').returns(db.collection('brands'));
        db.collection('brands')['onSnapshot']((snapshot) => {
            chai.expect(snapshot.docs).to.lengthOf(2);
        });
        const repository = this['container'].get('brandRepository');
        await repository.delete(data.delete);

        sandbox.reset();
        sandbox.restore();
    });
});
