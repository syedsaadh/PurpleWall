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
var sign_in_form_service_1 = require('./sign-in-form.service');
var forms_1 = require('@angular/forms');
var user_1 = require('./user');
var SignInFormComponent = (function () {
    function SignInFormComponent(fb, signInService) {
        this.fb = fb;
        this.signInService = signInService;
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
    };
    SignInFormComponent.prototype.doLogin = function (event) {
        event.preventDefault();
        this.signInService.authenticate(this.loginForm.value)
            .subscribe(function (authenticateModel) { return console.log(authenticateModel['message']); }, console.error, function () { return console.log('Completed!'); });
        console.log(this.loginForm.value);
        alert(user_1.authenticateModel['message']);
    };
    SignInFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'purple-sign-in-form',
            templateUrl: 'sign-in-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, sign_in_form_service_1.SignInUserService])
    ], SignInFormComponent);
    return SignInFormComponent;
}());
exports.SignInFormComponent = SignInFormComponent;
0;
//# sourceMappingURL=sign-in-form.component.js.map