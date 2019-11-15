import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http:HttpClient) { }

  getUsers (): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
