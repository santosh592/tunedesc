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
var createpost_service_1 = require("../service/createpost.service");
var authentication_service_1 = require("../service/authentication.service");
var NavigateComponent = (function () {
    //@Input()
    //private creatAdService: CreateAdService
    function NavigateComponent(router, createpostservice, authenticationService) {
        this.router = router;
        this.createpostservice = createpostservice;
        this.authenticationService = authenticationService;
        this.postTypeList = {};
        this.userdetails = {};
        this.login = true;
    }
    NavigateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createpostservice.getPostTypeList().subscribe(function (data) {
            _this.postTypeList = data;
            console.log(data);
            console.log(_this.postTypeList);
            //throw new Error("Method not implemented.");
        });
        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe(function (data) {
            _this.userdetails = data.resposeobject;
            console.log(data);
        });
    };
    NavigateComponent.prototype.goToHome = function () {
        this.router.navigate(['/home']);
    };
    NavigateComponent.prototype.goToStartup = function () {
        this.router.navigate(['/startup']);
    };
    NavigateComponent.prototype.goToBusiness = function () {
        this.router.navigate(['/business']);
    };
    NavigateComponent.prototype.goToTech = function () {
        this.router.navigate(['/tech']);
    };
    NavigateComponent.prototype.goToScience = function () {
        this.router.navigate(['/science']);
    };
    NavigateComponent.prototype.goToLogin = function () {
        //this.router.navigate(['/login']);
        this.router.navigate(['/login']);
    };
    NavigateComponent.prototype.goToSignUp = function () {
        this.router.navigate(['/signup']);
    };
    NavigateComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    NavigateComponent.prototype.goToCreateEvents = function () {
        this.router.navigate(['/createpost']);
    };
    return NavigateComponent;
}());
NavigateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navigate',
        templateUrl: 'navigate.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, createpost_service_1.CreatePostService, authentication_service_1.AutheticationService])
], NavigateComponent);
exports.NavigateComponent = NavigateComponent;
//# sourceMappingURL=navigate.component.js.map