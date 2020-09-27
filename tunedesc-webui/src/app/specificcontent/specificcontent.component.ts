import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //import router
import { CreatePostService } from '../service/createpost.service';
import { AutheticationService } from '../service/authentication.service';

@Component({
  selector: 'app-specificcontent',
  templateUrl: './specificcontent.component.html',
  styleUrls: ['./specificcontent.component.scss']
})
export class SpecificcontentComponent implements OnInit {
  postTypeList = {};
  userdetails = {};
  constructor(private router: Router, private createpostservice: CreatePostService, private authenticationService: AutheticationService) {

  }


  //create instance
posttype:string;
  ngOnInit(): void {

    this.createpostservice.getPostTypeList().subscribe((data: any) => {
      this.postTypeList = data;
      console.log(data);
      console.log(this.postTypeList);

      //throw new Error("Method not implemented.");
    })

    this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
      this.userdetails = data.resposeobject;
      console.log(data);

    })

    this.posttype=localStorage.getItem("posttype")
  }



}
