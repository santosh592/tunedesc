import { HttpService } from './http.service';
import { Injectable, Inject } from '@angular/core';
import { Post } from '../model/Post';
import { Observable } from 'rxjs/Rx';
import { RestEndPoints } from '../constants/restendpoints';



@Injectable()
export class CreatePostService {

    // getbusinessCat(): Observable<any> {
    //     this.token = localStorage.getItem('token')
    //     return this.httpservice.httpGet('/post/businessType', '8080', this.token);
    // }
    private token: string
    constructor(private httpservice: HttpService) {
    }

    create(Post: Post): Observable<any> {
        this.token = localStorage.getItem('token')
        return this.httpservice.httpPost(Post, RestEndPoints.SAVE_POST, '8080', this.token);
    }



    getPostTypeList(): Observable<any> {
        //  this.token = localStorage.getItem('token')
        return this.httpservice.httpGet(RestEndPoints.POSTS_CATEGORY, '8080', null);


    }

}