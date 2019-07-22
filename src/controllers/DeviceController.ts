import { JsonController, UseBefore, QueryParams, Body, Param, Params, Get, Post, Patch, Delete } from 'routing-controllers';
import { celebrate } from 'celebrate';
import * as bodyParser from 'body-parser';

import * as R from 'ramda';

import { ICreateDevice, IUpdateDevice, IDeleteDevice, IDevice } from '../interfaces/IDevice';
import { DeviceService } from '../services/DeviceService';
import * as schemas from '../schemas/requests/device';

@JsonController('/devices')
export class DeviceController {

    constructor(private readonly deviceService: DeviceService) { }

    @Post('/')
    @UseBefore(bodyParser.json(), celebrate(schemas.create))
    create(@Body() device: ICreateDevice): Promise<IDevice> {
        return this.deviceService.create(device);
    }

    @Patch('/:id')
    @UseBefore(bodyParser.json(), celebrate(schemas.update))
    update(@Param('id') id: string, @Body() device: IUpdateDevice): Promise<IDevice> {
        return this.deviceService.update(R.mergeRight(device, { id }));
    }

    @Delete('/:id')
    @UseBefore(bodyParser.json(), celebrate(schemas.remove))
    delete(@Params() device: IDeleteDevice): Promise<IDevice> {
        return this.deviceService.delete(device);
    }

    @Get('/')
    @UseBefore(celebrate(schemas.findAll))
    findAll(@QueryParams() query: any): Promise<IDevice[]> {
        return this.deviceService.findAll(query);
    }

    @Get(`/:id`)
    @UseBefore(bodyParser.json(), celebrate(schemas.findOneById))
    findOneById(@Param('id') id: string): Promise<IDevice> {
        return this.deviceService.findOneById(id);
    }
}
