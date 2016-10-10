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
var register_form_service_1 = require('./register-form.service');
var forms_1 = require('@angular/forms');
var RegisterFormComponent = (function () {
    function RegisterFormComponent(fb, regService) {
        this.fb = fb;
        this.regService = regService;
        this.registerForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            name: new forms_1.FormControl
        });
    }
    RegisterFormComponent.prototype.ngOninit = function () {
        this.registerForm = this.fb.group({
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required],
            email: [""],
            name: [""]
        });
    };
    RegisterFormComponent.prototype.doLogin = function (event) {
        event.preventDefault();
        this.regService.register(this.registerForm.value)
            .subscribe(function (registerModel) { return console.log(registerModel['message']); }, console.error, function () { return console.log('Completed!'); });
        console.log(this.registerForm.value);
    };
    RegisterFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'purple-register-form',
            templateUrl: 'register-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, register_form_service_1.RegisterUserService])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=register-form.component.js.map