# MapsApp
No usar directamente en AngularCLI (a menos que estén creadas las variables de entorno), ya que las variables de entorno se crean basados en el .env

## Pasos:
1. Clonar el .env.template y renombrarlo a .env
2. Llenar las variables de entorno acorde
3. Crear Angular Envs (opcional)
```
npm run envs
```

4. Para development ejecutar:
```
npm run start
```

5. Para producción ejecutar:
```
npm run build
```

---

## Continuación con la sección de MapsApp

Este proyecto es la **continuación de la sección 21: Mapas en Angular**. Como yo no hice esa sección, me salté directamente a esta sección de
**standalone components**, para ello cloné el proyecto del repositorio de Fernando. Listo, a partir de ahora, sobre el proyecto ya construido
de los mapas, continuaré con el tema de los **standalone components**.

## [¿Qué son los Standalone Components?](https://angular.io/guide/standalone-components)

Los componentes independientes (Standalone Components) proporcionan una forma simplificada de crear aplicaciones Angular. Los componentes, las directivas y las canalizaciones independientes tienen como objetivo optimizar la experiencia de creación al reducir la necesidad de NgModules. Las aplicaciones existentes pueden adoptar de forma incremental y opcional el nuevo estilo independiente sin ningún cambio importante.

## Standalone - Como Página

Para poder crear un componente del tipo **Standalone** podemos utilizar el **CLI de Angular** ejecutando el 
siguiente comando:

````bash
ng g c alone/pages/alonePage --standalone
````
Obviamente el **alone/pages/alonePage** corresponde a la ruta y nombre del componente que estoy creando.

Como resultado de crear el componente, sin agregar ninguna bandera adicional, tan solo con el **--standalone**,
se nos crearán los siguientes archivos:

````bash
CREATE src/app/alone/pages/alone-page/alone-page.component.html (25 bytes)
CREATE src/app/alone/pages/alone-page/alone-page.component.spec.ts (616 bytes)
CREATE src/app/alone/pages/alone-page/alone-page.component.ts (312 bytes)
CREATE src/app/alone/pages/alone-page/alone-page.component.css (0 bytes)
````
Como se observa, son los mismos archivos que se crean cuando se crea un componente normal que no es standalone, 
pero la diferencia es que **NO SE IMPORTA EN NINGÚN MÓDULO**, cosa que no ocurre cuando creamos un componente que no es standalone, en ese casó sí aparece un **UPDATE de algún-módulo**, pero como estamos creando un componente del tipo standalone, tan solo se crean los archivos sin actualizarse en ningún módulo.

Si abrimos el componente creado observaremos la siguiente estructura:

````typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alone-page',
  standalone: true,             //<-- No dice que el componente será un standalone
  imports: [CommonModule],      //<-- Nos permite importar módulos u otros componentes que son standalone
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

}
````
- **standalone: true**, es lo que al componente lo convierte en un standalone (componente independiente).
- **imports: [CommonModule]**, las importaciones también se pueden usar para hacer referencia a directivas y canalizaciones standalone. De esta forma, los componentes independientes se pueden escribir sin necesidad de crear un NgModule para administrar las dependencias de la plantilla.


