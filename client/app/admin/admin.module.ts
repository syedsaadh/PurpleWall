import { NgModule }      from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";
import {AdminRouting} from "./admin.routing";
import {AdminComponent} from "./admin.component";
import {RegisterFormComponent} from "./signup/register-form.component";
import {SignInFormComponent} from "./login/sign-in-form.component";
import {HomeComponent} from "./home/home.component";
import {RegisterUserService} from "./_services/registeration.service";
import {AuthGuard} from "./_guards/auth.guard";
import {AuthenticationService} from "./_services/authentication.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        AdminRouting
    ],
    declarations: [ AdminComponent,RegisterFormComponent,SignInFormComponent,HomeComponent],
    providers:    [ RegisterUserService,AuthGuard, AuthenticationService]
})
export class AdminModule { }