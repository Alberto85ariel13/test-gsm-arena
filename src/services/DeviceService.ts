import * as R from 'ramda';
import { DeviceRepository } from '../repositories/DeviceRepository';
import { ICreateDevice, IDeleteDevice, IUpdateDevice } from '../interfaces/IDevice';

export class DeviceService {

    constructor(private readonly deviceRepository: DeviceRepository) { }

    public async findAll(query: object): Promise<any> {

        return await this.deviceRepository.findAll(query)
            .then(R.objOf('data'));
    }

    public async create(device: ICreateDevice): Promise<any> {
        return await this.deviceRepository.create(device)
            .then(R.objOf('data'));
    }

    public async update(device: IUpdateDevice): Promise<any> {
        return await this.deviceRepository.update(device)
            .then(R.objOf('data'));
    }

    public async delete(device: IDeleteDevice): Promise<any> {
        return await this.deviceRepository.delete(device)
            .then(R.objOf('data'));
    }

}
