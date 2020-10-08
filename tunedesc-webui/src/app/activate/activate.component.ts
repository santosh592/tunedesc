import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ActivateService } from '../service/activate.service';


@Component({
    moduleId: module.id,
    selector: 'activate',
    templateUrl: 'activate.component.html',

})


export class ActivateComponent {
    private id: number;
    private sub: any;
    confirmation = {};
    test: any;

    constructor(private router: ActivatedRoute, private activateservice: ActivateService) {
        this.getid()
        this.activate()
    }


    getid() {
        this.sub = this.router.params.subscribe(params => {
            this.id = +params['id'];
            console.log(this.id);
        });

    }


    activate() {
        console.log(this.confirmation)
        this.activateservice.activate(this.id).subscribe((data: any) => {
            this.confirmation = data.resposeobject; console.log(this.confirmation);
        });

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}