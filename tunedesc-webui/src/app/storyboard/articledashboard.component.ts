
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePostService } from '../service/createpost.service';
import { AutheticationService } from '../service/authentication.service';


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

    @Input()
    username: string = null;
    //@Input()
    //private creatAdService: CreateAdService
    userstories=[
            {"story":"this is first story"},
            {"story":"this is second story"},
            {"story":"this is third story"},
            {"story":"this is 4th story"},
            {"story":"this is 5th story"},
            {"story":"this is 6th story"}
    
    ]

    featured=[
        {"story":"this is first story"},
        {"story":"this is second story"},
        {"story":"this is third story"},
        {"story":"this is 4th story"},
        {"story":"this is 5th story"},
        {"story":"this is 6th story"}

    ]
    topstory={"title":"snowflake startup goes ipo","story":"This is top story",
                "views":100,"storyPostedTime":"2020-09-17T00:00:00"}

    diffTimeUpdated:any=0

    @Input()
    user: string = null;
    constructor(private router: Router, private createpostservice: CreatePostService, private authenticationService: AutheticationService) {

    }

    ngOnInit(): void {


        try {

            this.user = localStorage.getItem('username');
            if (this.user != null) {
                this.login = false;
            }
        }
        catch (error) {
            console.log("Did not get respose for userdetails")
        }

        this.posttype = localStorage.getItem("posttype")
        let currentDate:number=new Date().getTime()
        let storyUpdatedTime:number=new Date(this.topstory.storyPostedTime).getTime()
         this.diffTimeUpdated =(currentDate-storyUpdatedTime)/60*60*60
        
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
}


