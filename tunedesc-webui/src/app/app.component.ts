import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { AutheticationService } from './service/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  login: boolean = true;
  token: boolean;

  username: string;
  password: string;
  constructor(private router: Router) {

  }


  // btnClick= function () {
  //     this.router.navigate(['/home']);
  //}
  onSubmit(f: NgForm) {
    //console.log(f.email);
    // this.authenticationservice.getauthToken(this.username, this.password);
    // if (localStorage.getItem("access_token") != null) {
    //   console.log(localStorage.getItem("access_token"));
    //   this.router.navigate(['/dashboard']);

  }
}



