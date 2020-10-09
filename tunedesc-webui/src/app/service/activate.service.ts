import { HttpService } from './http.service';
import { Injectable, Inject } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Rx';
import { RestEndPoints } from '../constants/restendpoints';


@Injectable()
export class ActivateService {

    constructor(private httpservice: HttpService) {
    }

    activate(id: Number): Observable<any> {
        console.log(id);
        return this.httpservice.httpGet(RestEndPoints.USER_ACTIVATE + id, '8080', '')
    }

}