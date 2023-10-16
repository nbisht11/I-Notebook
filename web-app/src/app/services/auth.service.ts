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
    const url = environment.AUTH_HOST + environment.LOGIN_ENDPOINT;
    return this.http.post(url, user);
  }

  createUser(user:any){
    const url = environment.AUTH_HOST + environment.SIGN_UP_ENDPOINT;
    return this.http.post(url, user);
  }

  getUser(){
    const url = environment.AUTH_HOST + environment.GET_USER_ENDPOINT;
    return this.http.get(url); 
  }
}
