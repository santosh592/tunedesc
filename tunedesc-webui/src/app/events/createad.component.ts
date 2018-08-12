import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdPost } from '../model/AdPost';
import { CreateAdService } from '../service/createad.service';





@Component({
    moduleId: module.id,
    selector: 'createad',
    templateUrl: 'createad.component.html',
})


export class AdCreateComponent  implements OnInit  {

    @Input()
    company: string;


    @Input()
    businessType: string;
    @Input()
    aboutcompany: string;

    @Input()
    addescription: string;

    postType: string;

    userId: string;

    response = {}
    businessTypelist={}

    constructor(private router: Router, private createadservice: CreateAdService) {

    }

    ngOnInit() {
        this.createadservice.getbusinessCat().subscribe((data: any) => {
            this.businessTypelist = data;
            console.log(data);
            console.log(this.businessTypelist);


        });
    }

    postAd() {
        this.userId = localStorage.getItem('userId')
        this.postType = localStorage.getItem('advert')

        console.log(this.userId)
        let adpost = new AdPost(this.company, this.businessType, this.aboutcompany, this.addescription, this.postType, this.userId);
        this.createadservice.createAd(adpost).subscribe((data: any) => {
            this.response = data; console.log(data);
        });


    }
}

