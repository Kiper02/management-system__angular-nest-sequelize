import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';
import { IAuth } from '../interfaces/auth/auth';
import { IToken } from '../interfaces/auth/token';
import { ILogin } from '../interfaces/auth/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;

  checkAuth() {
    return this.isAuth;
  }

  constructor(private http: HttpClient, private route: Router) {
    if (localStorage.getItem('token')) {
      this.isAuth = true;
    }
  }

  registration(dto: IAuth) {
    this.http
      .post<IToken>(`${environment.apiUrl}/user/registration`, dto)
      .subscribe((data: IToken) => {
        localStorage.setItem('token', data.token);
        this.isAuth = true;
        this.route.navigate(['/home']);
      });
  }

  registrationByInvtitation(dto: IAuth) {
    this.http
      .post<IToken>(`${environment.apiUrl}/user/registration/:link`, dto)
      .subscribe((data: IToken) => {
        localStorage.setItem('token', data.token);
        this.isAuth = true;
        this.route.navigate(['/home']);
      });
  }

  async login(dto: ILogin) {
    this.http
      .post<IToken>(`${environment.apiUrl}/user/login`, dto)
      .subscribe((data: IToken) => {
        if (data) {
          console.log(data);
          localStorage.setItem('token', data.token);
          this.route.navigate(['/home']);
          this.isAuth = true;
        }
      });
  }

  async logut() {
    localStorage.removeItem('token');
    this.isAuth = false;
    this.route.navigate(['/login']);
  }
}
