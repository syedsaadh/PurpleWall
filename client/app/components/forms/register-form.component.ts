import { Component } from '@angular/core';
import { RegisterFormModel }    from './register-form-model';
import { RegisterUserService } from './register-form.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { registerModel } from './user';

@Component({
  moduleId: module.id,
  selector: 'purple-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {
   
   registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email:new FormControl(),
    name:new FormControl
  });

   constructor(private fb: FormBuilder,private regService: RegisterUserService ) {  }
   ngOninit(){
       this.registerForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      email:[""],
      name:[""]
    });
   }
  doLogin(event) {
    event.preventDefault();
    this.regService.register(this.registerForm.value)
    .subscribe( registerModel => {
      console.log(registerModel['message']);
      alert(registerModel['message']);
    },console.error,
        () => console.log('Completed!'));
    console.log(this.registerForm.value);
    
  }
}
