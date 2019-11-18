import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/services/get-users.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 constructor(private _getUsersService: GetUsersService,
    private _snackBar: MatSnackBar
    ) { }
  
  usersData: any;
  userDetails: any = {
    id: '',
    name: '',
    username:'',
    email: '',
    streetAddress: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
    companyName: ''
  };
  message: string;
  // selectedFood1: string;
  ngOnInit() {
    this._getUsersService.getUsers().subscribe(res => {
      this.usersData = JSON.parse(JSON.stringify(res));
    });
  }
  
  
  getUserDetails(id:any){
  this.userDetails = [];
    this.usersData.forEach(element => {
      if(element.id == id.value){
        // this.userDetails=element;
        //  this.userDetails.push(element);
        this.userDetails={
          id: element.id,
          name: element.name,
          username: element.username,
          email: element.email,
          streetAddress: element.address.street,
          city: element.address.city,
          zipcode: element.address.zipcode,
          phone: element.phone,
          website: element.website,
          companyName: element.company.name

        }
        console.log(this.userDetails);
        return this.userDetails;
      }
    });

    // for(let i=0; i<this.usersData.length; i++){
    //   if(this.usersData[i].id == id.value){
    //       this.userDetails.push(this.usersData[i]);
    //       return this.userDetails;
    //   }
    // }
  }


  openSnakBar(message: string){
    this._snackBar.open(message, 'X', {
      // duration: 2000,
      verticalPosition: 'top',
      panelClass: ['red-snackbar']
    });
  }

}
