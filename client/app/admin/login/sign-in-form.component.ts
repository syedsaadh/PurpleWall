import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'purple-sign-in-form',
    templateUrl: 'sign-in-form.component.html'
})
export class SignInFormComponent implements OnInit{
    loading = false;
    error = '';
    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private signInService: AuthenticationService
    ) {}
    ngOnInit(){
        this.signInService.logout();
        this.loginForm = this.fb.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });

    }
    doLogin(event) {
        event.preventDefault();
        this.signInService.login(this.loginForm.value)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    console.log(this.router.url);
                    this.router.navigate(['admin/home']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}