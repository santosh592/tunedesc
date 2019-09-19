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
var contentpublishpanel_service_1 = require("../service/contentpublishpanel.service");
var authentication_service_1 = require("../service/authentication.service");
var PostCreateComponent = (function () {
    function PostCreateComponent(router, createpostservice, authenticationService) {
        this.router = router;
        this.createpostservice = createpostservice;
        this.authenticationService = authenticationService;
        this.postTypeList = {};
        this.userdetails = {};
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createpostservice.getPostTypeList().subscribe(function (data) {
            _this.postTypeList = data;
            console.log(data);
            console.log(_this.postTypeList);
        });
        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe(function (data) {
            _this.userdetails = data.resposeobject;
            console.log(data);
        });
    };
    PostCreateComponent.prototype.test = function () {
        console.log(this.contenttype);
    };
    PostCreateComponent.prototype.goToCreatePost = function () {
        console.log(this.contenttype);
        localStorage.setItem('posttype', this.contenttype);
        this.router.navigate(['/contentpublish']);
    };
    return PostCreateComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PostCreateComponent.prototype, "contenttype", void 0);
PostCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'createpost',
        templateUrl: 'createpost.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, contentpublishpanel_service_1.ContentPublishService,
        authentication_service_1.AutheticationService])
], PostCreateComponent);
exports.PostCreateComponent = PostCreateComponent;
//# sourceMappingURL=createpost.component.js.map