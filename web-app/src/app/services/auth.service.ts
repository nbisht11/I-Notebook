import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return localStorage.getItem("auth-token") != "";
  }

  validateUser(user:any) {
    return this.http.post(environment.authUrl, user);
  }
}
