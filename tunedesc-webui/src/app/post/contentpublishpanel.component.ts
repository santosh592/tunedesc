import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutheticationService } from '../service/authentication.service'
import { ContentPublishService } from '../service/contentpublishpanel.service';





@Component({
    moduleId: module.id,
    selector: 'contentpublishpanel',
    templateUrl: 'contentpublishpanel.component.html',
})


export class ContentPublishPanel implements OnInit {

    userdetails = {};

   
    contenttype :string;
    constructor(private router: Router, private contentpublishservice: ContentPublishService,
        private authenticationService: AutheticationService) {

    }

    ngOnInit() {
       
        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
            this.userdetails = data.resposeobject;
            console.log(data);

        });
        this.contenttype = localStorage.getItem('posttype')
    }
            
    }

    




