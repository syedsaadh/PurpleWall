import { Component } from '@angular/core';
import { SignInUserService } from './sign-in-form.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { authenticateModel } from './user';

@Component({
  moduleId: module.id,
  selector: 'purple-sign-in-form',
  templateUrl: 'sign-in-form.component.html'
})
export class SignInFormComponent {
   loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
 });
   constructor(private fb: FormBuilder,private signInService: SignInUserService ) {  }
   ngOninit(){
       this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required] 
      });
   }
  doLogin(event) {
    event.preventDefault();
    this.signInService.authenticate(this.loginForm.value)
    .subscribe( authenticateModel => console.log(authenticateModel['message']),console.error,
        () => console.log('Completed!'));
    console.log(this.loginForm.value);
    alert(authenticateModel['message']);
  }
}
0