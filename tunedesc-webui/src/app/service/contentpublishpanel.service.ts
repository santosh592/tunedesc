import{HttpService}from'./http.service';
import { Injectable, Inject}from '@angular/core';
import {Post}from '../model/Post';
import { Observable}from 'rxjs/Rx';



@Injectable()
export class ContentPublishService {

getbusinessCat(): Observable<any> {
        this.token = localStorage.getItem('token')
        return this.httpservice.httpGet('/post/businessType','8080',this.token);
    }
    private token: string
    constructor(private httpservice: HttpService) {
    }

    createAd(adPost: Post): Observable<any> {
        this.token = localStorage.getItem('token')
        return this.httpservice.httpPost(adPost, '/post/saveDocument', '8080', this.token);
    }



    getPostTypeList(): Observable<any>{
        this.token = localStorage.getItem('token')
        return this.httpservice.httpGet('/post/content-type','8080',this.token);


    }

}