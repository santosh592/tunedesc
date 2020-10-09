
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pagenotfound',
    templateUrl: 'pagenotfound.component.html',

})


export class PageNotFoundComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit(): void {

    }
}


