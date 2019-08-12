
import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateAdService } from '../service/createad.service';


@Component({
    moduleId: module.id,
    selector: 'navigate',

    templateUrl: 'navigate.component.html',

})


export class NavigateComponent implements OnInit {
    postTypeList = {};
    //@Input()
    //private creatAdService: CreateAdService
    constructor(private router: Router,private creatAdService: CreateAdService) {

    }
    ngOnInit(): void {

        this.creatAdService.getPostTypeList().subscribe((data: any) => {
            this.postTypeList = data;
            console.log(data);
            console.log(this.postTypeList);

        })
        //throw new Error("Method not implemented.");
    }
    
    login: boolean = true;



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
}


