import { ICreateDevice, IUpdateDevice, IDeleteDevice } from '../interfaces/IDevice';
import { logger } from '../utils/logger';

export class DeviceRepository {

    constructor(private readonly db: any) { }

    public async findAll(query: object): Promise<any> {
        logger.info(this.db);
        logger.info(query);

        return;
    }

    public async findById(id: string): Promise<any> {
        logger.info(id);

        return;
    }

    public async create(device: ICreateDevice): Promise<any> {
        logger.info(device);

        return;
    }

    public async update(device: IUpdateDevice): Promise<any> {
        logger.info(device);

        return;
    }

    public async delete(device: IDeleteDevice): Promise<any> {
        logger.info(device);

        return;
    }
}
