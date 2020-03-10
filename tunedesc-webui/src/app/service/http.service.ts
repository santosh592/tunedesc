import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HttpService {

    private url: string = 'http://localhost';

    errormessage = {};


    constructor(private http: Http) {

    }

    httpPost(body: any, restEndPoint: string, port: string, usertoken: string): Observable<any> {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');


        var token = "?access_token=" + usertoken
        let options1 = new RequestOptions({ headers: myHeaders });
        var jsonbody = JSON.stringify(body);

        if (typeof usertoken != 'undefined' && usertoken) {
            console.log("Got usertoken ,Executing with token {} ")
            return this.http.post(this.url + ':' + port + restEndPoint + token, jsonbody, options1).map((res: Response) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        } else

            console.log("usertoken coming empty,Executing without token {} ")
        return this.http.post(this.url + ':' + port + restEndPoint, jsonbody, options1).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


    }

    httpGet(restEndPoint: string, port: string, usertoken: string): Observable<any> {

        let myHeaders = new Headers();

        var token = "?access_token=" + usertoken
        let options1 = new RequestOptions({ headers: myHeaders });
        console.log(this.url + ':' + port + restEndPoint + token);

        if (typeof usertoken) {
            return this.http.get(this.url + ':' + port + restEndPoint + token, options1).map((res: Response) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        } else
            return this.http.get(this.url + ':' + port + restEndPoint + token, options1).map((res: Response) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }



    httpAuthPost(username: string, password: string, restEndPoint: string, port: string): Observable<any> {
        let myheader = new Headers();
        myheader.append('Content-Type', 'application/json');



        var authRequest = '?grant_type=password&username=' + username + '&password=' + password + '&scope=read&client_id=tunedesc&client_secret=txsLnIXH1FBAHhCppqAnZcESq1Gku3df'
        let options2 = new RequestOptions({ headers: myheader });
        console.log(username, password)

        return this.http.post(this.url + ':' + port + restEndPoint + authRequest, options2).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


    }

}

