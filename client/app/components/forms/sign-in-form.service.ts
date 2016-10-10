import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { authenticateModel } from './user';

@Injectable()
export class SignInUserService {
    private authenticateUrl = '/api/editors/authenticate';  // URL to web api
    constructor(private http: Http) {}
    authenticate(body:Object): Observable<authenticateModel[]> {
        //var username = body['username'];
        //var password = body['password'];
        //var bodySend = '{"username":'+username+',"password":'+password+'}';
        console.log(body);
        var headers = new Headers();
        headers.append('Contxent-Type', 'application/json'); 
        return this.http
            .post(this.authenticateUrl, body, { headers: headers })
            .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}