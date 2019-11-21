import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css'],
  // providers: [MatSnackBar]
})
export class LoginPopupComponent implements OnInit {

  constructor(private router: Router, 
    private _snackBar: MatSnackBar
    ) { }
  
username: string;
password: string;
message: string;
  ngOnInit() {
  }
  
  login() : void {

    if((this.username == ''|| this.username == null)&& (this.password == ''||this.password == null)){
      // this.router.navigate(["home"]);
      this.message="Please enter username and password!"
      this.openSnakBar(this.message);
    }else if(this.username == 'chandu' && this.password == 'chandu'){
      this.router.navigate(["nav"]);
    }else{
      this.message="Invalid username or password!"
      this.openSnakBar(this.message);
    }
  }

  openSnakBar(message: string){
    this._snackBar.open(message, 'X', {
      // duration: 2000,
      verticalPosition: 'top',
      panelClass: ['red-snackbar']
    });
  }
}
