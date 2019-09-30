import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AutheticationService } from '../service/authentication.service'
import { ContentPublishService } from '../service/contentpublishpanel.service';

@Component({
  selector: 'app-mediumeditor',
  templateUrl: './mediumeditor.component.html',
  styleUrls: ['./mediumeditor.component.scss']
})


export class MediumeditorComponent implements OnInit {
  
  userdetails = {};

   
  contenttype :string;
  constructor(private router: Router, private contentpublishservice: ContentPublishService,
      private authenticationService: AutheticationService) {

  }

  ngOnInit() {
     
      this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
          this.userdetails = data.resposeobject;
          console.log(data);

      });
      this.contenttype = localStorage.getItem('posttype')
  }


}
