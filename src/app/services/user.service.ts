import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post(`${API_URL}/register`, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);
  }
}