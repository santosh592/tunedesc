import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../service/signup.service';
import { User } from '../model/user'
import { Role } from '../model/role'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorMessages } from '../constants/errormessages';


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
    @Input() message:string;
    userdata = {};
    @Input() userexists=false

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
        this.signupservice.signup(user).subscribe((data: any) => { this.userdata = data; 
        this.message=this.userdata["message"]
        if(this.userdata["username"]!=null){
            this.message=""
        }else
        if(this.message=ErrorMessages.USER_ALREADY_EXISTS){
            this.userexists=true
        }
           console.log(data); });


    }



}


