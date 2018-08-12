import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';



@Component({
    moduleId: module.id,
    selector: 'navigate',
    
    templateUrl: 'navigate.component.html',
   
})


export class NavigateComponent { 
    constructor(private router :Router) { 
        
    }
   login: boolean=true;



   goToLogin(){
    //this.router.navigate(['/login']);
    this.router.navigate(['/login']);
     }
   
     goToSignUp(){
      this.router.navigate(['/signup']);
        }
}


