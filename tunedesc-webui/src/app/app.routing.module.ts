import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NavigateComponent } from './shared/navigate/navigate.component';
import { ForgetPwdComponent } from './login/forgetpwd.component';
import { PostCreateComponent } from './post/createpost.component';
import { ActivateComponent } from './activate/activate.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { MediumeditorComponent } from './mediumeditor/mediumeditor.component';
import { PublishedConfirmComponent } from './mediumeditor/publishedconfirm.component';
import { ArticleDashboardComponent } from './storyboard/articledashboard.component';
import { ReaderBoardComponent } from './storyboard/readerboard.component';




export const routes: Routes = [

    {
        // path: 'app', component: AppComponent,
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
                }
            ]
    },

    { path: '', redirectTo: '/app', pathMatch: 'full' },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'forgetpassword',
        component: ForgetPwdComponent
    },
    {

        path: 'createpost',
        component: PostCreateComponent

    },
    {
        path: 'activateaccount/:id',
        component: ActivateComponent

    },
    {
        path: 'app-mediumeditor',
        component: MediumeditorComponent

    },
    {
        path: 'confirmpublish/:id',
        component: PublishedConfirmComponent

    },
    {
        path: 'article/specifictype/startup',
        component: ArticleDashboardComponent

    },
    {
        path: 'readerboard',
        component: ReaderBoardComponent

    },

    // otherwise redirect to app
    {
        path: '**', component: PageNotFoundComponent, redirectTo: ''
    }
];



export const routing = RouterModule.forRoot(routes, { enableTracing: true });


