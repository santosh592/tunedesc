import{Component, Input}from '@angular/core';
import {Router}from '@angular/router';
import {SignUpService}from '../service/signup.service';
import {User}from '../model/User'
import {Role}from '../model/Role'
import {FormGroup, FormBuilder, Validators}from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html'

})


export class SignupComponent {
    @Input() username: string;
    @Input() password: string;
    @Input() confirm_password: string;
    @Input() email: string;
    @Input() phonenumber: string;
    userdata ={};

  constructor(private router: Router, private signupservice: SignUpService) {
  

    }

    goToLogin() {
        this.router.navigate(['/login']);
    }

    registeronsubmit() {
        let role = new Role(1, null, null);
        let arrofroles = [];
        console.log(this.userdata)
        arrofroles.push(role);
        
        
            let user = new User(this.username, this.password, this.email, this.phonenumber, arrofroles);
        console.log(user)
            this.signupservice.signup(user).subscribe((data :any) => {this.userdata = data ;console.log(data);});
        

    }



}


