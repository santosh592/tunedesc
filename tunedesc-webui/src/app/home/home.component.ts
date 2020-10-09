import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'landing-page',
    templateUrl: 'home.component.html',

})


export class HomeComponent {
    constructor(private router: Router) { }
    goToDashboard() {

        this.router.navigate(['/'])

    }
}


