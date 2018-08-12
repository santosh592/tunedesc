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
var router_1 = require("@angular/router");
var authentication_service_1 = require("../service/authentication.service");
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authdata = {};
        this.userdetails = {};
    }
    LoginComponent.prototype.goToforgetpwd = function () {
        this.router.navigate(['/forgetpassword']);
    };
    LoginComponent.prototype.goToSignUp = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent.prototype.loginAuthentication = function () {
        var _this = this;
        this.authenticationService.getauthToken(this.username, this.password).subscribe(function (data) {
            _this.authdata = data.access_token;
            console.log(data.access_token);
            console.log(data);
            if (data.access_token != null) {
                _this.router.navigate(['/dashboard']);
                localStorage.setItem('token', data.access_token);
            }
            else {
                _this.invalidcredit = 'Bad credentials';
                console.log(_this.invalidcredit);
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "username", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, authentication_service_1.AutheticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map