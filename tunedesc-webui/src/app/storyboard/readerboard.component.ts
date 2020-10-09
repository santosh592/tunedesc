import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePostService } from '../service/createpost.service';
import { AutheticationService } from '../service/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'readerboard',
    templateUrl: 'readerboard.component.html',
    styleUrls: ['./readerboard.component.scss']

})

export class ReaderBoardComponent implements OnInit {

    story: any = {}

    constructor(private router: Router, private createpostservice: CreatePostService, private authenticationService: AutheticationService) {

    }
    ngOnInit(): void {

        this.story = {
            "storyTitle": "Title",
            "storycontent": "somthing something something", "writername": "santosh m", "subscribed": false, "storycatogory": "startup"
        }
    }
}