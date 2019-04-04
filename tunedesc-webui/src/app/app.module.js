"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // < -- NgModel lives here
var http_1 = require("@angular/http");
//import { InMemoryDataService }  from './in-memory-data.service';
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home/home.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var signup_component_1 = require("./signup/signup.component");
var navigate_component_1 = require("./navigate/navigate.component");
var http_service_1 = require("./service/http.service");
//import { AutheticationService } from './service/authentication.service';
var signup_service_1 = require("./service/signup.service");
var login_component_1 = require("./login/login.component");
var forgetpwd_component_1 = require("./login/forgetpwd.component");
var createpost_component_1 = require("./events/createpost.component");
var createad_component_1 = require("./events/createad.component");
var createArticle_component_1 = require("./events/createArticle.component");
var createEvent_component_1 = require("./events/createEvent.component");
var activate_component_1 = require("./activate/activate.component");
var activate_service_1 = require("./service/activate.service");
var authentication_service_1 = require("./service/authentication.service");
var createad_service_1 = require("./service/createad.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            //InMemoryWebApiModule.forRoot(InMemoryDataService),
            app_routing_1.routing // <-- import the FormsModule before binding with [(ngModel)]
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            dashboard_component_1.DashboardComponent,
            signup_component_1.SignupComponent,
            navigate_component_1.NavigateComponent,
            login_component_1.LoginComponent,
            forgetpwd_component_1.ForgetPwdComponent,
            createpost_component_1.PostCreateComponent,
            activate_component_1.ActivateComponent,
            createad_component_1.AdCreateComponent,
            createArticle_component_1.ArticleCreateComponent,
            createEvent_component_1.CreateEventComponent
        ],
        providers: [http_service_1.HttpService, signup_service_1.SignUpService, activate_service_1.ActivateService, authentication_service_1.AutheticationService, createad_service_1.CreateAdService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map