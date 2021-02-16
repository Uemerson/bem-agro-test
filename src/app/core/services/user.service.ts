import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUser(username: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${username}`);
  }

  fetchUserById(id: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/user/${id}`);
  }
}
