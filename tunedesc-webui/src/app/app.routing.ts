import{Routes, RouterModule}from '@angular/router';
import {AppComponent}from './app.component';
import {HomeComponent}from './home/home.component';
import {DashboardComponent}from './dashboard/dashboard.component';
import {SignupComponent }from './signup/signup.component';
import {NavigateComponent}from './navigate/navigate.component';
import {LoginComponent}from './login/login.component';
import {ForgetPwdComponent}from './login/forgetpwd.component';
import {PostCreateComponent}from './post/createpost.component'
import {ContentPublishPanel} from './post/contentpublishpanel.component'
import {ActivateComponent}from './activate/activate.component'




const appRoutes: Routes = [

    {
        path: 'app', component: AppComponent,


        children:
            [
                {
                    path: '',
                    component: NavigateComponent,
                    outlet: 'navigation'
                },
                {
                    path: '',
                    component: HomeComponent,
                    outlet: 'body1'
                },

            ]
    },
    
{ path: '', redirectTo: '/app', pathMatch: 'full' },
{
path: 'login',
component: LoginComponent
},
{
path: 'signup',
component: SignupComponent
},
{
path: 'forgetpassword',
component: ForgetPwdComponent
},
{
path: 'dashboard',
component: DashboardComponent

}, {

path: 'createpost',
component: PostCreateComponent

},
{

path: 'contentpublish',
component: ContentPublishPanel

},
{
path: 'activateaccount/:id',
component: ActivateComponent

},

// otherwise redirect to app
{path: '**', redirectTo: ''
}
];


export const routing = RouterModule.forRoot(appRoutes);
RouterModule.forChild(appRoutes);

