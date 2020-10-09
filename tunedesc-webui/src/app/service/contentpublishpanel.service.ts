import { HttpService } from './http.service';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { RestEndPoints } from '../constants/restendpoints';


@Injectable()
export class ContentPublishService {

    getbusinessCat(): Observable<any> {
        this.token = localStorage.getItem('token')
        return this.httpservice.httpGet('/post/businessType', '8080', this.token);
    }
    private token: string
    constructor(private httpservice: HttpService) {
    }


    getPostTypeList(): Observable<any> {
        this.token = localStorage.getItem('token')
        return this.httpservice.httpGet(RestEndPoints.POSTS_CATEGORY, '8080', null);

    }

    publishContent(post: string, title: string, userId: string, postType: string): Observable<any> {
        this.token = localStorage.getItem('token')
        console.log(this.token)
    
        var jsonpost =
            { "content": post, "title": title, "postType": { "type": postType }, "userId": userId }
    
        console.log(jsonpost)
        return this.httpservice.httpPost(jsonpost, RestEndPoints.SAVE_CONTENT, '8080', this.token);

    }

}