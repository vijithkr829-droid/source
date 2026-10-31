import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Happy Birthday, Veda',
    loadComponent: () => import('./pages/birthday-home/birthday-home').then((page) => page.BirthdayHome),
  },
  { path: '**', redirectTo: '' },
];
