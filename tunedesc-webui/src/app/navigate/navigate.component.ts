
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    @Input()
    typeOfPosts: any = []
    @Input()
    typeList: any = []

    @Input()
    login: boolean = false;
    activeClass: string;


    user: string = null;

    //@Input()
    //private creatAdService: CreateAdService
    constructor(private router: Router, private createpostservice: CreatePostService, private authenticationService: AutheticationService) {

    }

    ngOnInit(): void {

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
}


