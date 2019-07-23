import * as R from 'ramda';
import bsonObjectid from 'bson-objectid';
import { ICreateDevice, IUpdateDevice, IDeleteDevice } from '../interfaces/IDevice';
import { logger } from '../utils/logger';

const createQuery = (collection, query) => {
    R.keys(query).forEach((element) => {
        collection.where(element, '==', query[element]);
    });
};

export class DeviceRepository {

    constructor(private readonly db: any) { }

    public async findAll(query: object): Promise<any> {
        const queryBuilder = this.db.collection('devices');
        createQuery(queryBuilder, query);
        const result = [];
        await queryBuilder.get().then(snapshot => snapshot.forEach(doc => result.push({ id: doc.id, ...doc.data() })));

        return result;
    }

    public async create(device: ICreateDevice): Promise<any> {
        const id = (new bsonObjectid()).toHexString();

        const result = await new Promise<any>((resolve, reject) => {
            this.db
                .collection('devices')
                .doc(device.id || id).set(device)
                .then(res => resolve(R.mergeRight({ id }, device)), err => reject(err));
        });
        logger.info(`Inserted Device ${id}`);

        return result;
    }

    public async update(device: IUpdateDevice): Promise<any> {
        const result = await new Promise<any>((resolve, reject) => {
            this.db
                .collection('devices')
                .doc(device.id).set(device, { merge: true })
                .then(res => resolve(device), err => reject(err));
        });
        logger.info(`Updated Device ${result.id}`);

        return result;
    }

    public async delete(device: IDeleteDevice): Promise<any> {
        const result = await new Promise<any>((resolve, reject) => {
            this.db
                .collection('devices')
                .doc(device.id).delete()
                .then(res => resolve({}), err => reject(err));
        });
        logger.info(`Removed Device ${device.id}`);

        return result;
    }
}
