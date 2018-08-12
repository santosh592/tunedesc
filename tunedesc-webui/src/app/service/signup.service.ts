
import { HttpService } from './http.service';
import { Injectable, Inject } from '@angular/core';
import {User} from '../model/user';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SignUpService {
    

    constructor(private httpservice: HttpService) {
    }

    signup(user: User): Observable<any>{
       return this.httpservice.httpPost(user, '/user/saveDocument', '8080','')
        }

}