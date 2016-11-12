"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var admin_component_1 = require("./admin.component");
var sign_in_form_component_1 = require("./login/sign-in-form.component");
var register_form_component_1 = require("./signup/register-form.component");
var auth_guard_1 = require("./_guards/auth.guard");
var home_component_1 = require("./home/home.component");
var AdminRouting = (function () {
    function AdminRouting() {
    }
    AdminRouting = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: admin_component_1.AdminComponent,
                        children: [
                            {
                                path: '',
                                component: sign_in_form_component_1.SignInFormComponent
                            },
                            {
                                path: 'signin',
                                component: sign_in_form_component_1.SignInFormComponent
                            },
                            {
                                path: 'signup', component: register_form_component_1.RegisterFormComponent
                            },
                        ]
                    },
                    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRouting);
    return AdminRouting;
}());
exports.AdminRouting = AdminRouting;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=admin.routing.js.map