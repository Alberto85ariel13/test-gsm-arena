import { ICreateBrand, IUpdateBrand, IDeleteBrand } from '../interfaces/IBrand';
import { logger } from '../utils/logger';

export class BrandRepository {

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

    public async create(brand: ICreateBrand): Promise<any> {
        logger.info(brand);

        return;
    }

    public async update(brand: IUpdateBrand): Promise<any> {
        logger.info(brand);

        return;
    }

    public async delete(brand: IDeleteBrand): Promise<any> {
        logger.info(brand);

        return;
    }
}
