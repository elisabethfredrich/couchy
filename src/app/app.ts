import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserDataService } from './services/user-data-service';
import { AuthService } from './auth';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class App {
  protected readonly title = signal('couchy');
  private router = inject(Router);

  get isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
