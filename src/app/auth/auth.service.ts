import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private id = 'a1';

  get userIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  get userId() {
    return this.id;
  }
  constructor() {}

  public login(): void {
    this.isAuthenticated = true;
    return;
  }

  public logout(): void {
    this.isAuthenticated = false;
  }
}
