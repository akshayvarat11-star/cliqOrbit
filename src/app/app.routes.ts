import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home), title: 'CliqOrbit | AI-Powered Marketing Platform', data: { description: 'CliqOrbit delivers AI-powered programmatic advertising, precision marketing, and cutting-edge digital solutions.' } },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services), title: 'Services | CliqOrbit' },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About), title: 'About | CliqOrbit' },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio), title: 'Case Studies | CliqOrbit' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact), title: 'Contact | CliqOrbit' },
  { path: '**', redirectTo: '' }
];
