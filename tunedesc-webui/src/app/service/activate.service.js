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
var ActivateService = /** @class */ (function () {
    function ActivateService(httpservice) {
        this.httpservice = httpservice;
    }
    ActivateService.prototype.activate = function (id) {
        console.log(id);
        return this.httpservice.httpGet('/user/activate/' + id, '8080', '');
    };
    ActivateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], ActivateService);
    return ActivateService;
}());
exports.ActivateService = ActivateService;
//# sourceMappingURL=activate.service.js.map