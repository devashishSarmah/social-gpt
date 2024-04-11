import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

@NgModule({
  providers: [
    provideRouter([
      {
        path: '',
        loadComponent: () =>
          import('./home.component').then((c) => c.HomeComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./modules/feed/feed.component').then(c => c.FeedComponent)
          }
        ]
      },
    ]),
  ],
})
export class HomeRoutes {}
