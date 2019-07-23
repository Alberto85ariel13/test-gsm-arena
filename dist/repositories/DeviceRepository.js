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
class DeviceRepository {
    constructor(db) {
        this.db = db;
    }
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryBuilder = this.db.collection('devices');
            createQuery(queryBuilder, query);
            const result = [];
            yield queryBuilder.get().then(snapshot => snapshot.forEach(doc => result.push(Object.assign({ id: doc.id }, doc.data()))));
            return result;
        });
    }
    create(device) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (new bson_objectid_1.default()).toHexString();
            const result = yield new Promise((resolve, reject) => {
                this.db
                    .collection('devices')
                    .doc(device.id || id).set(device)
                    .then(res => resolve(R.mergeRight({ id }, device)), err => reject(err));
            });
            logger_1.logger.info(`Inserted Device ${id}`);
            return result;
        });
    }
    update(device) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve, reject) => {
                this.db
                    .collection('devices')
                    .doc(device.id).set(device, { merge: true })
                    .then(res => resolve(device), err => reject(err));
            });
            logger_1.logger.info(`Updated Device ${result.id}`);
            return result;
        });
    }
    delete(device) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve, reject) => {
                this.db
                    .collection('devices')
                    .doc(device.id).delete()
                    .then(res => resolve({}), err => reject(err));
            });
            logger_1.logger.info(`Removed Device ${device.id}`);
            return result;
        });
    }
}
exports.DeviceRepository = DeviceRepository;
