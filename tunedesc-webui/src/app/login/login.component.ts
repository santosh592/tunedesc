import { Router } from '@angular/router';
import { AutheticationService } from '../service/authentication.service'
import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/catch';
import { ErrorMessages } from '../constants/errormessages';

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
    error: string;


    constructor(private router: Router, private authenticationService: AutheticationService) { }
    goToforgetpwd() {
        this.router.navigate(['/forgetpassword']);
    }
    goToSignUp() {
        this.router.navigate(['/signup'])
    }


    loginAuthentication() {
        this.authenticationService.getauthToken(this.username, this.password).subscribe(data => {

            console.log(data);
            if (data.access_token != null) {
                this.router.navigate(['/app'])
                localStorage.setItem('token', data.access_token);
            }
        },
            (error) => {
                this.error = error;
                console.log(error)

                if (this.error = ErrorMessages.INVALID_GRANT) this.invalidcredit = ErrorMessages.INCORRECT_USERDETAILS
            }
        )
    }
}
