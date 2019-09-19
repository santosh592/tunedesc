import{Component, Input, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';
import { ContentPublishService } from '../service/contentpublishpanel.service';
import {AutheticationService }from '../service/authentication.service'





@Component({
    moduleId: module.id,
    selector: 'createpost',
    templateUrl: 'createpost.component.html',
})


export class PostCreateComponent implements OnInit {



    postTypeList = {};
    userdetails = {};

    @Input()
    
    contenttype: string;
    constructor(private router: Router, private createpostservice: ContentPublishService,
        private authenticationService: AutheticationService) {

    }

    ngOnInit() {
        this.createpostservice.getPostTypeList().subscribe((data: any) => {
            this.postTypeList = data;
            console.log(data);
            console.log(this.postTypeList);


        });
        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
            this.userdetails = data.resposeobject;
            console.log(data);

        });
    }




    test() {
        console.log(this.contenttype);
    }

    goToCreatePost() {
        console.log(this.contenttype);
        localStorage.setItem('posttype', this.contenttype)
        this.router.navigate(['/contentpublish'])
        }

    }



