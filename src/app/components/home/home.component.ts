import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  navLinks = [
    { path: '', label: 'Users' },
    { path: '/users', label: 'Users' },
    { path: '/todos', label: 'Todos' },
    { path: '/comments', label: 'Comments' },
  ];

  ngOnInit() {
  }

  // tabClick(tab: any){
  //   console.log(tab.tab.textLabel);
  //   if(tab.tab.textLabel == "Users"){
  //     this.router.navigate(["users"]);
  //   }else if(tab.tab.textLabel == "Todos"){
  //     this.router.navigate(["todos"]);
  //   }else if(tab.tab.textLabel == "Comments"){
  //     this.router.navigate(["comments"]);
  //   }else{
  //     return;
  //   }
  // }

}
