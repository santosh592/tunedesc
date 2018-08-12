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
Object.defineProperty(exports, "__esModule", { value: true });
var http_service_1 = require("./http.service");
var core_1 = require("@angular/core");
var CreateAdService = (function () {
    function CreateAdService(httpservice) {
        this.httpservice = httpservice;
    }
    CreateAdService.prototype.getbusinessCat = function () {
        this.token = localStorage.getItem('token');
        return this.httpservice.httpGet('/post/businessType', '8080', this.token);
    };
    CreateAdService.prototype.createAd = function (adPost) {
        this.token = localStorage.getItem('token');
        return this.httpservice.httpPost(adPost, '/post/saveDocument', '8080', this.token);
    };
    CreateAdService.prototype.getPostTypeList = function () {
        this.token = localStorage.getItem('token');
        return this.httpservice.httpGet('/post/postType', '8080', this.token);
    };
    return CreateAdService;
}());
CreateAdService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], CreateAdService);
exports.CreateAdService = CreateAdService;
//# sourceMappingURL=createad.service.js.map