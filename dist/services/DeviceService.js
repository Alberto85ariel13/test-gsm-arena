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
class DeviceService {
    constructor(deviceRepository) {
        this.deviceRepository = deviceRepository;
    }
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deviceRepository.findAll(query)
                .then(R.objOf('data'));
        });
    }
    create(device) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deviceRepository.create(device)
                .then(R.objOf('data'));
        });
    }
    update(device) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deviceRepository.update(device)
                .then(R.objOf('data'));
        });
    }
    delete(device) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deviceRepository.delete(device)
                .then(R.objOf('data'));
        });
    }
}
exports.DeviceService = DeviceService;
