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
var createpost_component_1 = require("./events/createpost.component");
var createad_component_1 = require("./events/createad.component");
var createArticle_component_1 = require("./events/createArticle.component");
var createEvent_component_1 = require("./events/createEvent.component");
var activate_component_1 = require("./activate/activate.component");
var appRoutes = [
    {
        path: '', component: app_component_1.AppComponent,
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
    {
        path: 'login',
        component: login_component_1.LoginComponent
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
        path: 'createad',
        component: createad_component_1.AdCreateComponent
    },
    {
        path: 'eventcreate',
        component: createEvent_component_1.CreateEventComponent
    },
    {
        path: 'articlecreate',
        component: createArticle_component_1.ArticleCreateComponent
    },
    {
        path: 'activateaccount/:id',
        component: activate_component_1.ActivateComponent
    },
    // otherwise redirect to app
    { path: '**', redirectTo: ''
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map