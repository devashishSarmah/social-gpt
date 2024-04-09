import { Route } from '@angular/router';

export const routesMap = {
    AUTH: 'auth'
}

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: routesMap.AUTH,
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
    }
];
