import { Injectable, Inject } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Rx';
import { RestEndPoints } from '../constants/restendpoints';

@Injectable()
export class AutheticationService {
    userdetails = {};
    endpoint = "/oauth/token"


    constructor(private httpService: HttpService) {

    }

    getauthToken(username: string, password: string): Observable<any> {

        return this.httpService.httpAuthPost(username, password, RestEndPoints.AUTH_TOKEN, '8090')
    }

    getUserDetails(token: string) {

        return this.httpService.httpGet(RestEndPoints.USER_DETAILS, '8080', token);
    }
}


