import { HttpService } from './http.service';
import { Injectable, Inject } from '@angular/core';
import {User} from '../model/user';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ActivateService {
    

    constructor(private httpservice: HttpService) {
    }

    activate(id: Number): Observable<any>{
        console.log(id);
       return this.httpservice.httpGet('/user/activate/'+ id, '8080','')
        }

}