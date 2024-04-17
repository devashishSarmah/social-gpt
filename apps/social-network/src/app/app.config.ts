import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { IMAGE_LOADER } from '@angular/common';

/** Image loader */
import imageLoader from './shared/utils/cloudinary-loader';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(appRoutes), { provide: IMAGE_LOADER, useValue: imageLoader(environment.cloudinary) }],
};
