import { Component, inject } from '@angular/core';
import { UserDataService } from '../../services/user-data-service';
import { AuthService } from '../../auth';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../models/user-data';

@Component({
  imports: [AsyncPipe, RouterLink],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  private userDataService: UserDataService = inject(UserDataService);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  protected currentUser$: Observable<User> = this.userDataService.getCurrentUser();

  protected profileMenuOpen: boolean = false;

  protected toggleProfileMenu(): void {
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  protected handleLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
