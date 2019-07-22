import * as R from 'ramda';
import bsonObjectid from 'bson-objectid';
import { ICreateBrand, IUpdateBrand, IDeleteBrand } from '../interfaces/IBrand';
import { logger } from '../utils/logger';

const createQuery = (collection, query) => {
    R.keys(query).forEach((element) => {
        collection.where(element, '==', query[element]);
    });
};

export class BrandRepository {

    constructor(private readonly db: any) { }

    public async findAll(query: object): Promise<any> {
        const queryBuilder = this.db.collection('brands');
        createQuery(queryBuilder, query);
        const result = [];
        await queryBuilder.get().then(snapshot => snapshot.forEach(doc => result.push({ id: doc.id, ...doc.data() })));

        return result;
    }

    public async create(brand: ICreateBrand): Promise<any> {
        const id = (new bsonObjectid()).toHexString();

        const result = await new Promise<any>((resolve, reject) => {
            this.db
                .collection('brands')
                .doc(brand.id || id).set(brand)
                .then(res => resolve(R.mergeRight({ id }, brand)), err => reject(err));
        });
        logger.info(`Inserted Brand ${id}`);

        return result;
    }

    public async update(brand: IUpdateBrand): Promise<any> {
        const result = await new Promise<any>((resolve, reject) => {
            this.db
                .collection('brands')
                .doc(brand.id).set(brand, { merge: true })
                .then(res => resolve(brand), err => reject(err));
        });
        logger.info(`Updated Brand ${result.id}`);

        return result;
    }

    public async delete(brand: IDeleteBrand): Promise<any> {
        const result = await new Promise<any>((resolve, reject) => {
            this.db
                .collection('brands')
                .doc(brand.id).delete()
                .then(res => resolve({}), err => reject(err));
        });
        logger.info(`Removed Brand ${brand.id}`);

        return result;
    }
}
