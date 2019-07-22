import * as R from 'ramda';
import { BrandRepository } from '../repositories/BrandRepository';
import { ICreateBrand, IDeleteBrand, IUpdateBrand } from '../interfaces/IBrand';

export class BrandService {

    constructor(private readonly brandRepository: BrandRepository) { }

    public async findAll(query: object): Promise<any> {

        return await this.brandRepository.findAll(query)
            .then(R.objOf('data'));
    }

    public async findOneById(id: string): Promise<any> {
        return await this.brandRepository.findById(id)
            .then(R.objOf('data'));
    }

    public async create(brand: ICreateBrand): Promise<any> {
        return await this.brandRepository.create(brand)
            .then(R.objOf('data'));
    }

    public async update(brand: IUpdateBrand): Promise<any> {
        return await this.brandRepository.update(brand)
            .then(R.objOf('data'));
    }

    public async delete(brand: IDeleteBrand): Promise<any> {
        return await this.brandRepository.delete(brand)
            .then(R.objOf('data'));
    }

}
