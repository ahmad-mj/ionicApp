import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  get userIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  public login(): void {
    this.isAuthenticated = true;
  }

  public logout(): void {
    this.isAuthenticated = false;
  }
}
