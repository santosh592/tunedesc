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
var router_1 = require("@angular/router");
var signup_service_1 = require("../service/signup.service");
var User_1 = require("../model/User");
var Role_1 = require("../model/Role");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, signupservice) {
        this.router = router;
        this.signupservice = signupservice;
        this.userdata = {};
    }
    SignupComponent.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
    SignupComponent.prototype.registeronsubmit = function () {
        var _this = this;
        var role = new Role_1.Role(1, null, null);
        var arrofroles = [];
        console.log(this.userdata);
        arrofroles.push(role);
        var user = new User_1.User(this.username, this.password, this.email, this.phonenumber, arrofroles);
        this.signupservice.signup(user).subscribe(function (data) { _this.userdata = data; console.log(data); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "username", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "password", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "confirm_password", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "email", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "phonenumber", void 0);
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup',
            templateUrl: 'signup.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, signup_service_1.SignUpService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map