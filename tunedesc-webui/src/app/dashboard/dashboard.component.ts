import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../service/authentication.service'



@Component({
    moduleId: module.id,
    selector: 'dashboard',

    templateUrl: 'dashboard.component.html',

})


export class DashboardComponent implements OnInit {


    userdetails = {};
    
    

    constructor(private router: Router, private authenticationService: AutheticationService) { }


    ngOnInit() {

        this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
            this.userdetails = data.resposeobject;
            console.log(data);


        });
    }

    public events = [
        { title: 'Jilles', catogory: 'roomates' },
        { title: 'Todd', catogory: 'fest' },
        { title: 'Lisa', catogory: 'parties' }
    ];
    goToCreateEvents() {
        var username=this.userdetails["username"];

        localStorage.setItem('userId',this.userdetails["id"]);
        console.log(username)
        if(username!=null){
        this.router.navigate(['/createpost'])
        }else{



        }
    }
    logout(){

        localStorage.removeItem('token');
        this.router.navigate(['/'])
    }
    loginpage(){

      
        this.router.navigate(['/login'])
    }

}


