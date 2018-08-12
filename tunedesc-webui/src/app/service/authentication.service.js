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
var core_1 = require("@angular/core");
var http_service_1 = require("./http.service");
var AutheticationService = (function () {
    function AutheticationService(httpService) {
        this.httpService = httpService;
        this.userdetails = {};
        this.endpoint = "/oauth/token";
    }
    AutheticationService.prototype.getauthToken = function (username, password) {
        return this.httpService.httpAuthPost(username, password, this.endpoint, '8090');
    };
    AutheticationService.prototype.getUserDetails = function (token) {
        return this.httpService.httpGet('/user/userdetails', '8080', token);
    };
    return AutheticationService;
}());
AutheticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], AutheticationService);
exports.AutheticationService = AutheticationService;
//# sourceMappingURL=authentication.service.js.map