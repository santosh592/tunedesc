
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePostService } from 'src/app/service/createpost.service';
import { AutheticationService } from 'src/app/service/authentication.service';
import { ErrorMessages } from 'src/app/constants/errormessages';

@Component({
    moduleId: module.id,
    selector: 'app-navigate',
    templateUrl: 'navigate.component.html',
    styleUrls: ['./navigate.component.scss']

})

export class NavigateComponent implements OnInit {
    postTypeList = {};
    userdetails = {};
    activeClass: string;
    user: string = null;
    authdata = {};

    invalidcredit: string;
    error: string;

    @Input()
    typeOfPosts: any = []
    @Input()
    typeList: any = []

    @Input()
    login: boolean = false;

    @Input() username: string;
    @Input() password: string;

    constructor(private router: Router, private createpostservice: CreatePostService, private authenticationService: AutheticationService) {

    }

    ngOnInit(): void {
        this.setPostTypeList()
        this.setUserDetails()

    }

    setUserDetails() {
        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
            this.userdetails = data.resposeobject;
            console.log(data);
            this.username = this.userdetails["username"]

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

    setPostTypeList() {
        this.createpostservice.getPostTypeList().subscribe((data: any) => {
            this.postTypeList = data;
            console.log(data);
            console.log(this.postTypeList);
            this.typeOfPosts = this.postTypeList["listOfobjects"]
            this.typeList = this.postTypeList["type"]


        });
    }



    goToHome() {
        this.router.navigate(['/login']);
    }


    goToLogin() {

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


