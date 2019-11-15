import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/services/get-users.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _getUsersService: GetUsersService,
    private _snackBar: MatSnackBar
    ) { }
  
  usersData: any;
  userDetails: any;
  message: string;
  ngOnInit() {
    this._getUsersService.getUsers().subscribe(res => {
      this.usersData = res;
    });
  }
  
  
  getUserDetails(id:any){
    this.usersData.forEach(element => {
      console.log('value entered',element.id);
      console.log('value selected',id.value);
      if(element.id == id.value){
        console.log('Hi');
        this.userDetails=element;
        return this.userDetails;
      }
    });
  }


  openSnakBar(message: string){
    this._snackBar.open(message, 'X', {
      // duration: 2000,
      verticalPosition: 'top',
      panelClass: ['red-snackbar']
    });
  }

}
