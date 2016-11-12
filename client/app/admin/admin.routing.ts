import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import {AdminComponent} from "./admin.component";
import {SignInFormComponent} from "./login/sign-in-form.component";
import {RegisterFormComponent} from "./signup/register-form.component";
import {AuthGuard} from "./_guards/auth.guard";
import {HomeComponent} from "./home/home.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AdminComponent,
                children: [
                    {
                        path: '',
                        component: SignInFormComponent
                    },
                    {
                        path: 'signin',
                        component: SignInFormComponent
                    },
                    {
                        path: 'signup', component: RegisterFormComponent
                    },
                ]
            },
            { path: 'home', component: HomeComponent, canActivate:[AuthGuard]}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRouting { }


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */