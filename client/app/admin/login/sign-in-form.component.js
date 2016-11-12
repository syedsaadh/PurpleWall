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
var forms_1 = require('@angular/forms');
var authentication_service_1 = require("../_services/authentication.service");
var router_1 = require("@angular/router");
var SignInFormComponent = (function () {
    function SignInFormComponent(fb, router, signInService) {
        this.fb = fb;
        this.router = router;
        this.signInService = signInService;
        this.loading = false;
        this.error = '';
        this.loginForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl()
        });
    }
    SignInFormComponent.prototype.ngOninit = function () {
        this.loginForm = this.fb.group({
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
        this.signInService.logout();
    };
    SignInFormComponent.prototype.doLogin = function (event) {
        var _this = this;
        event.preventDefault();
        this.signInService.login(this.loginForm.value)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                console.log(_this.router.url);
                _this.router.navigate(['admin/home']);
            }
            else {
                // login failed
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    SignInFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'purple-sign-in-form',
            templateUrl: 'sign-in-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, authentication_service_1.AuthenticationService])
    ], SignInFormComponent);
    return SignInFormComponent;
}());
exports.SignInFormComponent = SignInFormComponent;
//# sourceMappingURL=sign-in-form.component.js.map