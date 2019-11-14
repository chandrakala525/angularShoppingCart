import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  constructor(private router: Router, private _snackBar: MatSnackBar) { }
  
username: string;
password: string;
  ngOnInit() {
  }
  
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["home"]);
    }else {
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open('Enter Username and Password', {
      duration: 2000,
    });
  }
}
