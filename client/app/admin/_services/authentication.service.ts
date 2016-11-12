import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    private authenticateUrl = '/api/editors/authenticate';  // URL to web api
    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser){
            this.token = currentUser.token;
        }
    }

    login(body:Object): Observable<boolean> {
        //var username = body['username'];
        //var password = body['password'];
        //var bodySend = '{"username":'+username+',"password":'+password+'}';
        var headers = new Headers();
        headers.append('Contxent-Type', 'application/json');
        return this.http
            .post(this.authenticateUrl, body, { headers: headers })
            .map((res:Response) => {
                let responseJson = res.json();
                if(responseJson){
                    let token = responseJson.token;
                    if(token){
                        this.token = token;
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify({ username: body['username'] , token: token }));
                        // return true to indicate successful login
                        return true;
                    } else {
                        return false;
                    }
                }
                }
            ) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}