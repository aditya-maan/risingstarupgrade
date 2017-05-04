import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import {  LocationService } from '../_services/index';

@Component({
   // moduleId: module.id,
    templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private location: LocationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.location.get_statusByCountry('CA').subscribe(
                data => {
                    
                    console.log(data);
                },
                error => {
//                    this.alertService.error(error);
//                    this.loading = false;
                    console.log(error+'error');
                });
        //console.log(this.location.get_allcountry());
    }

    ngOnInit() {
        //this.loadAllUsers();
    }
//
//    deleteUser(id: number) {
//        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
//    }
//
//    private loadAllUsers() {
//        this.userService.getAll().subscribe(users => { this.users = users; });
//    }
}