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
const awilix_1 = require("awilix");
const di_1 = require("../utils/di");
const logger_1 = require("../utils/logger");
const db_1 = require("./db");
const BrandController_1 = require("../controllers/BrandController");
const DeviceController_1 = require("../controllers/DeviceController");
const DeviceService_1 = require("../services/DeviceService");
const BrandService_1 = require("../services/BrandService");
const DeviceRepository_1 = require("../repositories/DeviceRepository");
const BrandRepository_1 = require("../repositories/BrandRepository");
let containerCreated = undefined;
exports.initDi = () => __awaiter(this, void 0, void 0, function* () {
    try {
        if (!(containerCreated)) {
            const { container } = di_1.createContainer({ injectionMode: awilix_1.InjectionMode.CLASSIC });
            const db = yield db_1.initDatabaseConnection();
            container.register({
                db: awilix_1.asValue(db),
                BrandController: awilix_1.asClass(BrandController_1.BrandController).singleton(),
                DeviceController: awilix_1.asClass(DeviceController_1.DeviceController).singleton(),
                deviceService: awilix_1.asClass(DeviceService_1.DeviceService).singleton(),
                brandService: awilix_1.asClass(BrandService_1.BrandService).singleton(),
                deviceRepository: awilix_1.asClass(DeviceRepository_1.DeviceRepository).singleton(),
                brandRepository: awilix_1.asClass(BrandRepository_1.BrandRepository).singleton(),
            });
            containerCreated = container;
        }
        const resolveName = someClass => (typeof someClass !== 'string') ? someClass.name : someClass;
        return { containerCreated, get: (someClass) => containerCreated.resolve(resolveName(someClass)) };
    }
    catch (error) {
        logger_1.logger.error(error);
        throw error;
    }
});
