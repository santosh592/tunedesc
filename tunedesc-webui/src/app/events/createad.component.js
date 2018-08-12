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
var AdPost_1 = require("../model/AdPost");
var createad_service_1 = require("../service/createad.service");
var AdCreateComponent = (function () {
    function AdCreateComponent(router, createadservice) {
        this.router = router;
        this.createadservice = createadservice;
        this.response = {};
        this.businessTypelist = {};
    }
    AdCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createadservice.getbusinessCat().subscribe(function (data) {
            _this.businessTypelist = data;
            console.log(data);
            console.log(_this.businessTypelist);
        });
    };
    AdCreateComponent.prototype.postAd = function () {
        var _this = this;
        this.userId = localStorage.getItem('userId');
        this.postType = localStorage.getItem('advert');
        console.log(this.userId);
        var adpost = new AdPost_1.AdPost(this.company, this.businessType, this.aboutcompany, this.addescription, this.postType, this.userId);
        this.createadservice.createAd(adpost).subscribe(function (data) {
            _this.response = data;
            console.log(data);
        });
    };
    return AdCreateComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AdCreateComponent.prototype, "company", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AdCreateComponent.prototype, "businessType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AdCreateComponent.prototype, "aboutcompany", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AdCreateComponent.prototype, "addescription", void 0);
AdCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'createad',
        templateUrl: 'createad.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, createad_service_1.CreateAdService])
], AdCreateComponent);
exports.AdCreateComponent = AdCreateComponent;
//# sourceMappingURL=createad.component.js.map