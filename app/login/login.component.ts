import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
   // moduleId: module.id,
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    currentUser: Object;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    //if(this.currentUser['field_is_coach'][0]['value'] == 1) {
                       // this.router.navigate(['/']);
                    //} else {
                        this.router.navigate(['/profile']);
                    //}

                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
