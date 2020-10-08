import { Component, ChangeDetectorRef, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { AutheticationService } from '../service/authentication.service'
import { ContentPublishService } from '../service/contentpublishpanel.service';
import { Input } from '@angular/core';


declare var MediumEditor: any;
@Component({
  selector: 'app-publishconfirm',
  templateUrl: './publishedconfirm.component.html',
  styleUrls: ['./publishedconfirm.component.scss']

})

export class PublishedConfirmComponent implements OnInit {
  editor: any;
  post: string;
  title: string;
  userdetails: any;
  contenttype: string;
  userdata = {};

  ngOnInit(): void {
    this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
      this.userdetails = data.resposeobject;

    });
    this.contenttype = localStorage.getItem('posttype')
  }

  // authenticationService: AutheticationService;


  constructor(private router: Router, private contentpublishservice: ContentPublishService,
    private authenticationService: AutheticationService) {

  }
}