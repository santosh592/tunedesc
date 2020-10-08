
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePostService } from '../service/createpost.service';
import { AutheticationService } from '../service/authentication.service';
import { ErrorMessages } from '../constants/errormessages';


@Component({
    moduleId: module.id,
    selector: 'articledashboard',

    templateUrl: 'articledashboard.component.html',
    styleUrls: ['./articledashboard.component.scss']

})


export class ArticleDashboardComponent implements OnInit {
    postTypeList = {};
    userdetails = {};
    posttype: string;
    login: boolean = true;
    activeClass: String;

    @Input() username: string;
    @Input() password: string;
    //@Input()
    //private creatAdService: CreateAdService
    authdata = {};

    invalidcredit: string;
    error: string;
    userstories = [
        { "story": "this is first story" },
        { "story": "this is second story" },
        { "story": "this is third story" },
        { "story": "this is 4th story" },
        { "story": "this is 5th story" },
        { "story": "this is 6th story" }

    ]

    featured = [
        { "story": "this is first story" },
        { "story": "this is second story" },
        { "story": "this is third story" },
        { "story": "this is 4th story" },
        { "story": "this is 5th story" },
        { "story": "this is 6th story" }

    ]
    topstory = {
        "title": "snowflake startup goes ipo", "story": "This is top story",
        "views": 100, "storyPostedTime": "2020-09-17T00:00:00"
    }

    diffTimeUpdated: any = 0

    @Input()
    user: string = null;
    constructor(private router: Router, private createpostservice: CreatePostService, private authenticationService: AutheticationService) {

    }

    ngOnInit(): void {
        this.topstory
        this.featured
        this.userstories
        this.setUsername()
        this.setLoginStatus()
        this.setPostType()

        let currentDate: number = new Date().getTime()
        let storyUpdatedTime: number = new Date(this.topstory.storyPostedTime).getTime()
        this.diffTimeUpdated = (currentDate - storyUpdatedTime) / 60 * 60 * 60

    }
    setPostType() {
        this.posttype = localStorage.getItem("posttype")
    }
    setLoginStatus() {
        if (this.user != null) {
            this.login = false;
        }
    }
    setUsername() {
        try {
            this.user = localStorage.getItem('username')
        }
        catch (error) {
            console.log("Did not get respose for userdetails")
        }
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
        this.login = true
        this.user = null

    }

    goToSpecificType(posttype: string) {
        this.router.navigate(['specificcontent/' + posttype])
        localStorage.setItem('posttype', posttype)
    }
    loginAuthentication() {


        this.authenticationService.getauthToken(this.username, this.password).subscribe(data => {

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
    goToforgetpwd() {
        this.router.navigate(['/forgetpassword']);
    }
}


