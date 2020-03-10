import { Router } from '@angular/router';
import { AutheticationService } from '../service/authentication.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/catch';

@Component({
    moduleId: module.id,
    selector: 'login',

    templateUrl: 'login.component.html'

})


export class LoginComponent {

    @Input() username: string;
    @Input() password: string;

    authdata = {};
    userdetails = {};
    invalidcredit: string;


    constructor(private router: Router, private authenticationService: AutheticationService) { }
    goToforgetpwd() {
        this.router.navigate(['/forgetpassword']);
    }
    goToSignUp() {
        this.router.navigate(['/signup'])
    }

    error: string;
    loginAuthentication() {


        this.authenticationService.getauthToken(this.username, this.password).subscribe(data => {
            //this.authdata = data.access_token;
           // console.log(data.access_token);
            console.log(data);
            if (data.access_token != null) {
                this.router.navigate(['/dashboard'])
                localStorage.setItem('token', data.access_token);
            }
        },
            (error) => {
                this.error = error;
                console.log(error)
                this.invalidcredit = 'Incorrect username or password'
                if (this.error = "invalid_grant") this.invalidcredit
            }


        )
    }
}
