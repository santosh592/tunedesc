import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { NavigateComponent } from './navigate/navigate.component';
import { LoginComponent } from './login/login.component';
import { ForgetPwdComponent } from './login/forgetpwd.component';
import { PostCreateComponent} from './events/createpost.component'
import { AdCreateComponent} from './events/createad.component'
import { ArticleCreateComponent} from './events/createArticle.component'
import { CreateEventComponent} from './events/createEvent.component'


import { ActivateComponent} from './activate/activate.component'




const appRoutes: Routes = [

	{
		path: '', component: AppComponent,

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

		path: 'createad',
		component: AdCreateComponent

	},
	{

		path: 'eventcreate',
		component: CreateEventComponent

	},
	{

		path: 'articlecreate',
		component: ArticleCreateComponent

	},
	{
		path: 'activateaccount/:id',
		component: ActivateComponent

	},

	// otherwise redirect to app
	{ path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);

