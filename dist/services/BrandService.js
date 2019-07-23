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
class BrandService {
    constructor(brandRepository) {
        this.brandRepository = brandRepository;
    }
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.brandRepository.findAll(query)
                .then(R.objOf('data'));
        });
    }
    create(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.brandRepository.create(brand)
                .then(R.objOf('data'));
        });
    }
    update(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.brandRepository.update(brand)
                .then(R.objOf('data'));
        });
    }
    delete(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.brandRepository.delete(brand)
                .then(R.objOf('data'));
        });
    }
}
exports.BrandService = BrandService;
