import { Routes } from '@angular/router';
import { BirthdayLoginComponent } from './log-in/log-in';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: BirthdayLoginComponent },
  { path: 'home', component: Home },
  { path: '**', redirectTo: '' },
];
