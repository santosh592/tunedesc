import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContentPublishService } from '../service/contentpublishpanel.service';
import { AutheticationService } from '../service/authentication.service'





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
    @Input()
    username:string

    @Input()
    typeOfPosts:any=[]
    @Input()
    typeList:any=[]

    @Input()
    user:string


    constructor(private router: Router, private createpostservice: ContentPublishService,
        private authenticationService: AutheticationService) {

    }

    ngOnInit() {
        this.createpostservice.getPostTypeList().subscribe((data: any) => {
            this.postTypeList = data;
            console.log(data);
            console.log(this.postTypeList);
            this.typeOfPosts=this.postTypeList["listOfobjects"]
            this.typeList=this.postTypeList["type"]


        });
        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
            this.userdetails = data.resposeobject;
            console.log(data);
            this.username=this.userdetails["username"]
            
        });

        try {

            this.user = localStorage.getItem('username');
            if (this.user != null) {
               
            }
        }
        catch (error) {
            console.log("Did not get respose for userdetails")
        }

    }



    goToCreatePost(contentType: string) {

        localStorage.setItem('posttype', contentType)
        this.router.navigate(['/app-mediumeditor'])
    }

}



