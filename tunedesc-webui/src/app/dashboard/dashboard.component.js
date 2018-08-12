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
var authentication_service_1 = require("../service/authentication.service");
var DashboardComponent = (function () {
    function DashboardComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.userdetails = {};
        this.events = [
            { title: 'Jilles', catogory: 'roomates' },
            { title: 'Todd', catogory: 'fest' },
            { title: 'Lisa', catogory: 'parties' }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe(function (data) {
            _this.userdetails = data.resposeobject;
            console.log(data);
        });
    };
    DashboardComponent.prototype.goToCreateEvents = function () {
        var username = this.userdetails["username"];
        localStorage.setItem('userId', this.userdetails["id"]);
        console.log(username);
        if (username != null) {
            this.router.navigate(['/createpost']);
        }
        else {
        }
    };
    DashboardComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    };
    DashboardComponent.prototype.loginpage = function () {
        this.router.navigate(['/login']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dashboard',
        templateUrl: 'dashboard.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, authentication_service_1.AutheticationService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map