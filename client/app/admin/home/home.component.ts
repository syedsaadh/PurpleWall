import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    //users: User[] = [];

//    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
  //      this.userService.getUsers()
    //        .subscribe(users => {
      //          this.users = users;
        //    });
    }

}