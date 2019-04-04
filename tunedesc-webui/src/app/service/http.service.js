"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var Rx_1 = require("rxjs/Rx");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.url = 'http://localhost';
        this.errormessage = {};
    }
    HttpService.prototype.httpPost = function (body, restEndPoint, port, usertoken) {
        var myHeaders = new http_1.Headers();
        myHeaders.append('Content-Type', 'application/json');
        var token = "?access_token=" + usertoken;
        var options1 = new http_1.RequestOptions({ headers: myHeaders });
        var jsonbody = JSON.stringify(body);
        if (typeof usertoken) {
            return this.http.post(this.url + ':' + port + restEndPoint, jsonbody, options1).map(function (res) { return res.json(); })
                .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        }
        else
            return this.http.post(this.url + ':' + port + restEndPoint + token, jsonbody, options1).map(function (res) { return res.json(); })
                .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HttpService.prototype.httpGet = function (restEndPoint, port, usertoken) {
        var myHeaders = new http_1.Headers();
        var token = "?access_token=" + usertoken;
        var options1 = new http_1.RequestOptions({ headers: myHeaders });
        console.log(this.url + ':' + port + restEndPoint + token);
        return this.http.get(this.url + ':' + port + restEndPoint + token, options1).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HttpService.prototype.httpAuthPost = function (username, password, restEndPoint, port) {
        var myheader = new http_1.Headers();
        myheader.append('Content-Type', 'application/json');
        var authRequest = '?grant_type=password&username=' + username + '&password=' + password + '&scope=read&client_id=tunedesc&client_secret=txsLnIXH1FBAHhCppqAnZcESq1Gku3df';
        var options2 = new http_1.RequestOptions({ headers: myheader });
        console.log(username, password);
        return this.http.post(this.url + ':' + port + restEndPoint + authRequest, options2).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map