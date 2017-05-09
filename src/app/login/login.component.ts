import { Component, OnInit,Pipe, Input } from '@angular/core';
import { Router, ActivatedRoute,RouterModule } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators,FormControl } from '@angular/forms';

import {  AlertService, AuthenticationService  } from '../_services/index';






@Component({
   // moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;
    currentUser: Object;
    public loginForm: FormGroup;

    constructor(
    private _fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {

    this.loginForm = this._fb.group({
        email: ['',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
        password: ['', [Validators.required,]],
    });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        console.log(JSON.stringify(this.loginForm['value']));
        this.loading = true;
        this.authenticationService.login(this.loginForm['value'].email, this.loginForm['value'].password)
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
