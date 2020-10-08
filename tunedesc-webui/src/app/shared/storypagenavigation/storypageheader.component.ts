
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePostService } from 'src/app/service/createpost.service';

import { AutheticationService } from 'src/app/service/authentication.service';
import { ErrorMessages } from 'src/app/constants/errormessages';


@Component({
    moduleId: module.id,
    selector: 'storypage-header',
    templateUrl: 'storypageheader.component.html',
    styleUrls: ['./storypageheader.component.scss']

})


export class StoryPageHeaderComponent implements OnInit {
    postTypeList = {};
    userdetails = {};
    posttype: string;
    @Input()
    typeOfPosts: any = []
    @Input()
    typeList: any = []

    @Input()
    login: boolean = false;
    activeClass: string;


    user: string = null;

    @Input() username: string;
    @Input() password: string;

    authdata = {};

    invalidcredit: string;
    error: string;

    //@Input()
    //private creatAdService: CreateAdService
    constructor(private router: Router, private createpostservice: CreatePostService, private authenticationService: AutheticationService) {

    }

    ngOnInit(): void {
        this.setPostType()

        this.createpostservice.getPostTypeList().subscribe((data: any) => {
            this.postTypeList = data;
            console.log(this.postTypeList);
            this.typeOfPosts = this.postTypeList["listOfobjects"]
            //this.typeList=this.typeOfPosts["type"]
            // console.log(this.typeList)
            //throw new Error("Method not implemented.");
        })

        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
            this.userdetails = data.resposeobject;
            console.log(data);
            try {

                localStorage.setItem('username', this.userdetails["username"]);
            } catch (error) {
                console.log("Did not get respose for userdetails")
            }


        })

        try {

            this.user = localStorage.getItem('username');
            if (this.user != null) {
                this.login = false;
            }
        }
        catch (error) {
            console.log("Did not get respose for userdetails")
        }
    }

    setPostType() {
        this.posttype = localStorage.getItem("posttype")
    }


    goToHome() {
        this.router.navigate(['/login']);
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

    removeAccessTokenFromCache() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        this.login = true
        this.user = null
    }

    goToSpecificType(posttype: string) {
        this.router.navigate(['/article/specifictype/' + posttype])
        localStorage.setItem('posttype', posttype)
    }



    goToforgetpwd() {
        this.router.navigate(['/forgetpassword']);
    }
   


    loginAuthentication() {


        this.authenticationService.getauthToken(this.username, this.password).subscribe(data => {
            //this.authdata = data.access_token;
            // console.log(data.access_token);
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


