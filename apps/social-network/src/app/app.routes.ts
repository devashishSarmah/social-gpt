import { Route } from '@angular/router';

export const routesMap = {
    AUTH: 'auth',
    HOME: ''
}

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.routes').then(m => m.HomeRoutes),
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
    }
];
