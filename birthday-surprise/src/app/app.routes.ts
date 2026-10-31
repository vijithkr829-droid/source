import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'A day as lovely as you — a birthday surprise',
    loadComponent: () => import('./pages/birthday-home/birthday-home').then((page) => page.BirthdayHome),
  },
  {
    path: 'surprise',
    title: 'A little more from the heart — a birthday surprise',
    loadComponent: () => import('./pages/heartfelt-surprise/heartfelt-surprise').then((page) => page.HeartfeltSurprise),
  },
  { path: '**', redirectTo: '' },
];
