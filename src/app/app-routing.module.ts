import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/home/users/users.component';
import { TodosComponent } from './components/home/todos/todos.component';
import { CommentsComponent } from './components/home/comments/comments.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'users', component: UsersComponent },
  { path:'todos', component: TodosComponent },
  { path:'comments', component: CommentsComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
