import{Router}from'@angular/router';
import {AutheticationService }from '../service/authentication.service'
import {FormGroup, FormBuilder, Validators }from '@angular/forms';
import {Component, Input}from '@angular/core';
import 'rxjs/add/operator/catch';

@Component({
    moduleId: module.id,
    selector: 'login',

    templateUrl: 'login.component.html'

})


export class LoginComponent {

    @Input() username: string;
    @Input() password: string;

    authdata={};
    userdetails={};
    invalidcredit:string;

    constructor(private router: Router, private authenticationService: AutheticationService) { }
    goToforgetpwd() {
        this.router.navigate(['/forgetpassword']);
    }
    goToSignUp() {
        this.router.navigate(['/signup'])
    }


    loginAuthentication() {
      
    
        this.authenticationService.getauthToken(this.username, this.password).subscribe((data :any) => {
            this.authdata = data.access_token ;
            console.log(data.access_token);
            console.log(data);
            if(data.access_token!=null){
                this.router.navigate(['/dashboard'])
             localStorage.setItem('token',data.access_token);
            }else {
               this.invalidcredit='Bad credentials'
               console.log(this.invalidcredit)
               
            }
        })
    }
}


