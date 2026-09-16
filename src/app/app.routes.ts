import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { authGuard, loginGuard } from './auth-guard-guard';
import { Details } from './components/home/search/details/details';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: 'login', component: Login, canActivate: [loginGuard] },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'details', component: Details },
    ],
  },
];
