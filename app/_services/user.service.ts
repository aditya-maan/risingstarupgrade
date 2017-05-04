import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

//import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }
    datastring= {};
            
    getTerm(vocab:string) {
        this.datastring = {"vocab":[{'value' : vocab}]};
        return this.http.post('http://m6risingstarsbxyhxef47n.devcloud.acquia-sites.com/gettexonomyterm-rest', this.datastring)
        .map((response: Response) => response.json());
    }
    
    get_filtered_team(datast:string) {
       
        return this.http.post('http://m6risingstarsbxyhxef47n.devcloud.acquia-sites.com/getfilteredteam-rest', datast)
        .map((response: Response) => response.json());
    }

/*
    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://m6risingstarsbxyhxef47n.devcloud.acquia-sites.com/register-rest', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getpostdata(url: string){
    return this.http.get(url, this.jwt()).map((response: Response) => response.json());
    
        //return this.http.get(url);  
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }*/
}