import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // < -- NgModel lives here
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule}from 'angular-';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { routing } from "./app.routing.module";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { NavigateComponent } from './navigate/navigate.component';
import { HttpService } from './service/http.service';
import { SignUpService } from './service/signup.service';
import { LoginComponent } from './login/login.component';
import { ForgetPwdComponent } from './login/forgetpwd.component';
import { PostCreateComponent } from './post/createpost.component';
import { ActivateComponent } from './activate/activate.component';
import { ActivateService } from './service/activate.service'
import { AutheticationService } from './service/authentication.service'
import { ContentPublishService } from './service/contentpublishpanel.service';
import { CreatePostService } from './service/createpost.service';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { MediumeditorComponent } from './mediumeditor/mediumeditor.component';
import { ArticleDashboardComponent } from './storyboard/articledashboard.component'
import { PublishedConfirmComponent } from './mediumeditor/publishedconfirm.component';
import { SpecificcontentComponent } from './specificcontent/specificcontent.component';
import { MediumEditorModule } from 'angular2-medium-editor';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MediumEditorModule,
    ReactiveFormsModule,
    routing
    //RouterModule.forRoot(routes, { useHash: true })

    //InMemoryWebApiModule.forRoot(InMemoryDataService),

    // <-- import the FormsModule before binding with [(ngModel)]

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SignupComponent,
    NavigateComponent,
    LoginComponent,
    ForgetPwdComponent,
    PostCreateComponent,
    ActivateComponent,
    PageNotFoundComponent,
    MediumeditorComponent,
    PublishedConfirmComponent,
    ArticleDashboardComponent,
    SpecificcontentComponent

  ],
  providers: [HttpService, SignUpService, ActivateService, AutheticationService, ContentPublishService, CreatePostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
