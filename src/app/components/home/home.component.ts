import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  // value:string;
  ngOnInit() {
    // this.value = 'users';
    // selectedTab(){
    //   console.log(this.value);
    //   // this.router.navigate(["home"]);
    // }
  }

  // selectedTab(value: any){
  //   console.log(value);
  //   this.router.navigate(["home"]);
  // }

}
