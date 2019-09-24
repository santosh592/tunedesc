"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var signup_component_1 = require("./signup/signup.component");
var navigate_component_1 = require("./navigate/navigate.component");
var login_component_1 = require("./login/login.component");
var forgetpwd_component_1 = require("./login/forgetpwd.component");
var createpost_component_1 = require("./post/createpost.component");
var contentpublishpanel_component_1 = require("./post/contentpublishpanel.component");
var activate_component_1 = require("./activate/activate.component");
var pagenotfound_component_1 = require("./pagenotfound/pagenotfound.component");
var appRoutes = [
    {
        path: 'app', component: app_component_1.AppComponent,
        children: [
            {
                path: '',
                component: navigate_component_1.NavigateComponent,
                outlet: 'navigation'
            },
            {
                path: '',
                component: home_component_1.HomeComponent,
                outlet: 'body1'
            },
        ]
    },
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'forgetpassword',
        component: forgetpwd_component_1.ForgetPwdComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: 'createpost',
        component: createpost_component_1.PostCreateComponent
    },
    {
        path: 'contentpublish',
        component: contentpublishpanel_component_1.ContentPublishPanel
    },
    {
        path: 'activateaccount/:id',
        component: activate_component_1.ActivateComponent
    },
    // otherwise redirect to app
    {
        path: '**', component: pagenotfound_component_1.PageNotFoundComponent, redirectTo: ''
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { enableTracing: true });
//# sourceMappingURL=app.routing.module.js.map