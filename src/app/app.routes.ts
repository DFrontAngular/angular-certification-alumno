import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
  {
    path: 'inicio',
    title: 'Inicio · Certificación Angular',
    loadComponent: () => import('./home/home.page').then((module) => module.HomePage),
  },
  {
    path: 'test-general',
    title: 'Test general · Certificación Angular',
    loadComponent: () =>
      import('./assessment/general-test.page').then((module) => module.GeneralTestPage),
  },
  {
    path: 'test-codigo',
    title: 'Análisis de código · Certificación Angular',
    loadComponent: () =>
      import('./assessment/code-test.page').then((module) => module.CodeTestPage),
  },
  {
    path: 'ejercicio-casa',
    title: 'Ejercicio de casa · Certificación Angular',
    loadComponent: () =>
      import('./take-home/users/users-page.component').then(
        (module) => module.UsersPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
