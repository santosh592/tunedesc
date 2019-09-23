
import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatePostService } from '../service/createpost.service';
import { AutheticationService } from '../service/authentication.service';


@Component({
    moduleId: module.id,
    selector: 'navigate',

    templateUrl: 'navigate.component.html',

})


export class NavigateComponent implements OnInit {
    postTypeList = {};
    userdetails = {};
    //@Input()
    //private creatAdService: CreateAdService
    constructor(private router: Router, private createpostservice: CreatePostService, private authenticationService: AutheticationService) {

    }

    ngOnInit(): void {

        this.createpostservice.getPostTypeList().subscribe((data: any) => {
            this.postTypeList = data;
            console.log(data);
            console.log(this.postTypeList);
            
            //throw new Error("Method not implemented.");
        })

        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
            this.userdetails = data.resposeobject;
            console.log(data);

        })
      }
    
    login: boolean = true;
    activeClass: String ;

   goToHome() {
       this.router.navigate(['/login']);
    }

    goToStartup() {
        this.router.navigate(['/startup']);
    }


    goToBusiness() {
        this.router.navigate(['/business']);
    } goToTech() {
        this.router.navigate(['/tech']);
    } goToScience() {
        this.router.navigate(['/science']);
    }

    goToLogin() {
        //this.router.navigate(['/login']);
        this.router.navigate(['/login']);
    }

    goToSignUp() {
        this.router.navigate(['/signup']);
    }

    
    goToDashboard() {

        this.router.navigate(['/dashboard'])

    }
    goToCreateEvents() {
        this.router.navigate(['/createpost'])
    }
}


