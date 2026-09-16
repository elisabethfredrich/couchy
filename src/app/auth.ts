import { Service, signal } from '@angular/core';

@Service()
export class AuthService {
  private loggedIn = signal<boolean>(!!localStorage.getItem('authToken'));

  isAuthenticated(): boolean {
    return this.loggedIn();
  }

  login(token: string): void {
    localStorage.setItem('authToken', token);
    this.loggedIn.set(true);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedIn.set(false);
  }
}