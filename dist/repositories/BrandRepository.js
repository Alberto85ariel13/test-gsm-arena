"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const R = require("ramda");
const bson_objectid_1 = require("bson-objectid");
const logger_1 = require("../utils/logger");
const createQuery = (collection, query) => {
    R.keys(query).forEach((element) => {
        collection.where(element, '==', query[element]);
    });
};
class BrandRepository {
    constructor(db) {
        this.db = db;
    }
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryBuilder = this.db.collection('brands');
            createQuery(queryBuilder, query);
            const result = [];
            yield queryBuilder.get().then(snapshot => snapshot.forEach(doc => result.push(Object.assign({ id: doc.id }, doc.data()))));
            return result;
        });
    }
    create(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (new bson_objectid_1.default()).toHexString();
            const result = yield new Promise((resolve, reject) => {
                this.db
                    .collection('brands')
                    .doc(brand.id || id).set(brand)
                    .then(res => resolve(R.mergeRight({ id }, brand)), err => reject(err));
            });
            logger_1.logger.info(`Inserted Brand ${id}`);
            return result;
        });
    }
    update(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve, reject) => {
                this.db
                    .collection('brands')
                    .doc(brand.id).set(brand, { merge: true })
                    .then(res => resolve(brand), err => reject(err));
            });
            logger_1.logger.info(`Updated Brand ${result.id}`);
            return result;
        });
    }
    delete(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve, reject) => {
                this.db
                    .collection('brands')
                    .doc(brand.id).delete()
                    .then(res => resolve({}), err => reject(err));
            });
            logger_1.logger.info(`Removed Brand ${brand.id}`);
            return result;
        });
    }
}
exports.BrandRepository = BrandRepository;
