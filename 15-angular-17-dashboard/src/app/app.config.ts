import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

/***
 * withViewTransitions(), tan solo agregando esta función, veremos que al cambiar de páginas
 * en nuestra aplicación veremos una ligera transición, agradable a la vista.
 *
 * Luego, podemos agregar algunos atributos dentro de la función:
 * skipInitialTransition: true, que la primera vez que cargue la aplicación se salte la animación de transición.
 * onViewTransitionCreated(trasitionInfo) {
 *    console.log(trasitionInfo); //Nos da cierta información sobre la transición.
 * },
 */

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      APP_ROUTES,
      withViewTransitions({
        skipInitialTransition: true,
        // onViewTransitionCreated(trasitionInfo) {
        //   console.log(trasitionInfo);
        // },
      }),
    ),
    provideHttpClient(),
  ]
};
