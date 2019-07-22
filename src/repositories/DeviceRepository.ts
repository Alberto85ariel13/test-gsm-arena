import * as R from 'ramda';
import bsonObjectid from 'bson-objectid';
import { ICreateDevice, IUpdateDevice, IDeleteDevice } from '../interfaces/IDevice';
import { logger } from '../utils/logger';

export class DeviceRepository {

    constructor(private readonly db: any) { }

    public async findAll(query: object): Promise<any> {
        return this.db.collection('devices').snapshotChanges();
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
