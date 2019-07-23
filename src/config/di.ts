import { asValue, InjectionMode, asClass } from 'awilix';
import { createContainer } from '../utils/di';
import { logger } from '../utils/logger';
import { initDatabaseConnection } from './db';
import { BrandController } from '../controllers/BrandController';
import { DeviceController } from '../controllers/DeviceController';

import { DeviceService } from '../services/DeviceService';
import { BrandService } from '../services/BrandService';

import { DeviceRepository } from '../repositories/DeviceRepository';
import { BrandRepository } from '../repositories/BrandRepository';

let containerCreated = undefined;
export const initDi = async () => {

    try {

        if (!(containerCreated)) {
            const { container } = createContainer({ injectionMode: InjectionMode.CLASSIC });
            const db = await initDatabaseConnection();
            container.register({
                db: asValue(db),
                BrandController: asClass(BrandController).singleton(),
                DeviceController: asClass(DeviceController).singleton(),

                deviceService: asClass(DeviceService).singleton(),
                brandService: asClass(BrandService).singleton(),

                deviceRepository: asClass(DeviceRepository).singleton(),
                brandRepository: asClass(BrandRepository).singleton(),
            });
            containerCreated = container;
        }

        const resolveName = someClass => (typeof someClass !== 'string') ? someClass.name : someClass;

        return { containerCreated, get: (someClass: any) => containerCreated.resolve(resolveName(someClass)) };

    } catch (error) {
        logger.error(error);
        throw error;
    }

};
