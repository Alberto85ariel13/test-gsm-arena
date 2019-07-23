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
const BrandService_1 = require("../services/BrandService");
const schemas = require("../schemas/requests/brand");
let BrandController = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    create(brand) {
        return this.brandService.create(brand);
    }
    update(id, brand) {
        return this.brandService.update(R.merge(brand, { id }));
    }
    delete(brand) {
        return this.brandService.delete(brand);
    }
    findAll(query) {
        return this.brandService.findAll(query);
    }
};
__decorate([
    routing_controllers_1.Post('/'),
    routing_controllers_1.UseBefore(bodyParser.json(), celebrate_1.celebrate(schemas.create)),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "create", null);
__decorate([
    routing_controllers_1.Patch('/:id'),
    routing_controllers_1.UseBefore(bodyParser.json(), celebrate_1.celebrate(schemas.update)),
    __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "update", null);
__decorate([
    routing_controllers_1.Delete('/:id'),
    routing_controllers_1.UseBefore(bodyParser.json(), celebrate_1.celebrate(schemas.remove)),
    __param(0, routing_controllers_1.Params()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "delete", null);
__decorate([
    routing_controllers_1.Get('/'),
    routing_controllers_1.UseBefore(celebrate_1.celebrate(schemas.findAll)),
    __param(0, routing_controllers_1.QueryParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "findAll", null);
BrandController = __decorate([
    routing_controllers_1.JsonController('/brands'),
    __metadata("design:paramtypes", [BrandService_1.BrandService])
], BrandController);
exports.BrandController = BrandController;
