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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var RegisterUserService = (function () {
    function RegisterUserService(http) {
        this.http = http;
        this.registerUrl = '/api/editors/register'; // URL to web api
    }
    RegisterUserService.prototype.register = function (body) {
        //var username = body['username'];
        //var password = body['password'];
        //var bodySend = '{"username":'+username+',"password":'+password+'}';
        console.log(body);
        var headers = new http_1.Headers();
        headers.append('Contxent-Type', 'application/json');
        return this.http
            .post(this.registerUrl, body, { headers: headers })
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    RegisterUserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RegisterUserService);
    return RegisterUserService;
}());
exports.RegisterUserService = RegisterUserService;
//# sourceMappingURL=registeration.service.js.map