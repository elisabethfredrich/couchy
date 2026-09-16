import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  protected handleLogin(): void {
    this.authService.login('dummy-token');
    this.router.navigate(['/home']);
  }
}