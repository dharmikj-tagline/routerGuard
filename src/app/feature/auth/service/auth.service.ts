import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  userData = [
    {
      username: 'user',
      email: 'user@gmail.com',
      password: 'user123',
      role: 'user',
    },
    {
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin123',
      role: 'admin',
    },
  ];

  login(data: { email: string; password: string }): any {
    return of(
      this.userData.find(
        (user: any) =>
          user.email === data.email && user.password === data.password
      )
    );
  }

  isLoggedIn() {
    return localStorage.getItem('email');
  }

  canExit() {
    if (confirm('Are you sure you want to exit?')) {
      return true;
    }
    return false;
  }
}
