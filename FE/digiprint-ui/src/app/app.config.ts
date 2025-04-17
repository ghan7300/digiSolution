import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'services', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent },
];

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
};
