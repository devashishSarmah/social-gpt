import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

@NgModule({
  providers: [
    provideRouter([
      {
        path: '',
        loadComponent: () =>
          import('./home.component').then((c) => c.HomeComponent),
      },
    ]),
  ],
})
export class HomeRoutes {}
