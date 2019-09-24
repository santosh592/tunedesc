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
var activate_service_1 = require("../service/activate.service");
var ActivateComponent = /** @class */ (function () {
    function ActivateComponent(router, activateservice) {
        this.router = router;
        this.activateservice = activateservice;
        this.confirmation = {};
        this.getid();
        this.activate();
    }
    ActivateComponent.prototype.getid = function () {
        var _this = this;
        this.sub = this.router.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log(_this.id);
        });
    };
    ActivateComponent.prototype.activate = function () {
        var _this = this;
        console.log(this.confirmation);
        this.activateservice.activate(this.id).subscribe(function (data) {
            _this.confirmation = data.resposeobject;
            console.log(_this.confirmation);
        });
    };
    ActivateComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ActivateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'activate',
            templateUrl: 'activate.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, activate_service_1.ActivateService])
    ], ActivateComponent);
    return ActivateComponent;
}());
exports.ActivateComponent = ActivateComponent;
//# sourceMappingURL=activate.component.js.map