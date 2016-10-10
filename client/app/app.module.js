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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var app_routes_1 = require('./app.routes');
var purple_nav_component_1 = require('./components/purple-nav.component');
var register_form_component_1 = require('./components/forms/register-form.component');
var register_form_service_1 = require('./components/forms/register-form.service');
var sign_in_form_component_1 = require('./components/forms/sign-in-form.component');
var sign_in_form_service_1 = require('./components/forms/sign-in-form.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent, purple_nav_component_1.PurpleNavComponent, register_form_component_1.RegisterFormComponent, sign_in_form_component_1.SignInFormComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [register_form_service_1.RegisterUserService, sign_in_form_service_1.SignInUserService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map