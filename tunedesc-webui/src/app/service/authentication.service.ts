
import { Injectable, Inject } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AutheticationService {
    userdetails={};
     endpoint = "/oauth/token"


    constructor(private httpService: HttpService) {

    }


    getauthToken(username: string, password: string) : Observable<any>{

       return this.httpService.httpAuthPost(username, password, this.endpoint, '8090')



    }

    getUserDetails(token:string) {

        return this.httpService.httpGet('/user/userdetails','8080',token);
 
    }
}


