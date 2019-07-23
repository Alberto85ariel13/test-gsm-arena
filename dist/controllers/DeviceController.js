"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const celebrate_1 = require("celebrate");
const bodyParser = require("body-parser");
const R = require("ramda");
const DeviceService_1 = require("../services/DeviceService");
const schemas = require("../schemas/requests/device");
let DeviceController = class DeviceController {
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    create(device) {
        return this.deviceService.create(device);
    }
    update(id, device) {
        return this.deviceService.update(R.mergeRight(device, { id }));
    }
    delete(device) {
        return this.deviceService.delete(device);
    }
    findAll(query) {
        return this.deviceService.findAll(query);
    }
};
__decorate([
    routing_controllers_1.Post('/'),
    routing_controllers_1.UseBefore(bodyParser.json(), celebrate_1.celebrate(schemas.create)),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "create", null);
__decorate([
    routing_controllers_1.Patch('/:id'),
    routing_controllers_1.UseBefore(bodyParser.json(), celebrate_1.celebrate(schemas.update)),
    __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "update", null);
__decorate([
    routing_controllers_1.Delete('/:id'),
    routing_controllers_1.UseBefore(bodyParser.json(), celebrate_1.celebrate(schemas.remove)),
    __param(0, routing_controllers_1.Params()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "delete", null);
__decorate([
    routing_controllers_1.Get('/'),
    routing_controllers_1.UseBefore(celebrate_1.celebrate(schemas.findAll)),
    __param(0, routing_controllers_1.QueryParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "findAll", null);
DeviceController = __decorate([
    routing_controllers_1.JsonController('/devices'),
    __metadata("design:paramtypes", [DeviceService_1.DeviceService])
], DeviceController);
exports.DeviceController = DeviceController;
