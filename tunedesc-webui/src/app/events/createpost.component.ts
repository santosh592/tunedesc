import{Component, Input, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';
import {CreateAdService}from '../service/createad.service';





@Component({
    moduleId: module.id,
    selector: 'createpost',
    templateUrl: 'createpost.component.html',
})


export class PostCreateComponent implements OnInit {



    postTypeList = {};

    @Input()
    
    contenttype: string;
    constructor(private router: Router, private createpostservice: CreateAdService) {

    }

    ngOnInit() {
        this.createpostservice.getPostTypeList().subscribe((data: any) => {
            this.postTypeList = data;
            console.log(data);
            console.log(this.postTypeList);


        });
    }




    test() {
        console.log(this.contenttype);
    }

    goTocreatead() {
        console.log(this.contenttype);
        if (this.contenttype == 'ADVERTISEMENT') {
            localStorage.setItem('advert', 'ADVERTISEMENT')
            this.router.navigate(['/createad'])
        }
        else
            if (this.contenttype == 'EVENT')
                this.router.navigate(['/eventcreate'])
            else if (this.contenttype == 'ARTICLE')
                this.router.navigate(['/articlecreate'])

    }
}


