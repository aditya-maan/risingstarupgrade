import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { AlertService } from './alert.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private Alert: AlertService) { 
    }

    login(email: string, password: string) {
        var cred = JSON.stringify({ email: email, password: password });    
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');

        return this.http.post('http://m6risinggpgq8j9um4.devcloud.acquia-sites.com/user_signin-rest', cred,{ headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response

                let user = response.json();
                // let token = response.json() && response.json().token;
                // this.token = token;
                //console.log();
                //if (user && user.token) {
                if (!user['error']) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    
                    localStorage.setItem('currentUser', JSON.stringify(user));
                } else {
                    this.Alert.error(user['error'],true);
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}