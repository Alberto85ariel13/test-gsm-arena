import { JsonController, UseBefore, QueryParams, Body, Param, Params, Get, Post, Patch, Delete } from 'routing-controllers';
import { celebrate } from 'celebrate';
import * as bodyParser from 'body-parser';

import * as R from 'ramda';

import { ICreateBrand, IUpdateBrand, IDeleteBrand, IBrand } from '../interfaces/IBrand';
import { BrandService } from '../services/BrandService';
import * as schemas from '../schemas/requests/brand';

@JsonController('/brands')
export class BrandController {

    constructor(private readonly brandService: BrandService) { }

    @Post('/')
    @UseBefore(bodyParser.json(), celebrate(schemas.create))
    create(@Body() brand: ICreateBrand): Promise<IBrand> {
        return this.brandService.create(brand);
    }

    @Patch('/:id')
    @UseBefore(bodyParser.json(), celebrate(schemas.update))
    update(@Param('id') id: string, @Body() brand: IUpdateBrand): Promise<IBrand> {
        return this.brandService.update(R.merge(brand, { id }));
    }

    @Delete('/:id')
    @UseBefore(bodyParser.json(), celebrate(schemas.remove))
    delete(@Params() brand: IDeleteBrand): Promise<IBrand> {
        return this.brandService.delete(brand);
    }

    @Get('/')
    @UseBefore(celebrate(schemas.findAll))
    findAll(@QueryParams() query: any): Promise<IBrand[]> {
        return this.brandService.findAll(query);
    }

    @Get(`/:id`)
    @UseBefore(bodyParser.json(), celebrate(schemas.findOneById))
    findOneById(@Param('id') id: string): Promise<IBrand> {
        return this.brandService.findOneById(id);
    }
}
