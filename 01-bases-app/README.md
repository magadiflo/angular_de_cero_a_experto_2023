# BasesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Generar el Build de Producción
```
ng build
```

## Ver la versión de ANGULAR que usa un proyecto
------------------------------------------------
- Para saber la versión Gobal de Angular CLI que tenemos instalado en la pc, abrimos cualquier CMD y escribimos
    ```
	ng version
    ```
	Como resultado obtendremos la versiones de Angular CLI, Node, NPM
- Ahora, para ver la versión de Angular CLI y la Versión de Angular que usa un proyecto, nos situamos con el CMD dentro
  de la raíz del proyecto, donde se encuentra el package.json, y ejecutamos el siguiente comando:
    ```
	ng version
    ```
	Como resultado obtendremos la versión de Angular CLI usado en ese proyecto, Node, NPM y 
	además la VERSIÓN DE ANGULAR.

# Desplegando la aplicación en GitHub Pages

### En la pc
- Construyamos el build de producción de nuestra aplicación de angular:
  ```
  ng build
  ```
- Se nos creará un directorio **/dist** conteniendo otro directorio con el nombre de nuestro proyecto **/bases-app** y dentro de éste último estará nuestros archivos transpilados.
- Copiaremos el directorio **/bases-app** y lo pegaremos en la raíz de nuestra aplicación de
Angular, renombrándolo con **/docs**.
- Pusheamos los nuevos cambios para que se actualice nuestro repositorio remoto de GitHub.

### En el repositorio de GitHub
Una vez nuestro repositorio remoto contenga el directorio **/docs**, vamos a **settings/pages**, y en la opción de **Source** elegimos **Deploy from a branch**. Luego en **Branch** seleccinoamos la rama donde tenemos nuestro 
directorio creado, en nuestro caso **main**, en el siguiente combo seleccionamos **/docs**, y ahora damos en **Save**.

### Abriendo aplicación desplegada en GitHub
Cada vez que hagamos un cambio en la carpeta **/docs**, automáticamente en la opción de **Actions** veremos que
se ejecutará un flujo de trabajo. Si damos click en él, veremos que nos mostrará la **url** donde desplegó nuestra aplicación.

### Error: No se muestra nuestra aplicación
Lo que pasa es que GitHub sube nuestra aplicación en una url similar a esta:
```
https://magadiflo.github.io/bases-app/
```
Y no mostrará la página, porque los archivos que busca nuestra aplicación de Angular, los está buscando en la 
raíz de ese dominio, es decir:
```
https://magadiflo.github.io/
```
Pero como observamos en la primera URL, GitHub lo desplegó en ese path adicional: **.../bases-app/**.

### Solución al error anterior
Para decirle a Angular que busque los archivos en el directorio actual donde se desplegó, podemos ir al
index.html de nuestro directorio **/docs** y en el siguiente tag agregarle el punto, así:
```html
<base href="./">
```
Lo que hace el tag anterior es que todos los paths relativos se basarán en el path relativo donde se encuentre
desplegado este index.html

## Automatización para compilar el build de producción de la aplicación con el ``<base href="./">``

Lo que podemos hacer es usar un comando que trae Angular. Si ejecutamos el siguiente comando: ``ng build --help``
veremos que nos muestra una lista de banderas a usar, una de esas banderas es ``--base-href``, justo el que 
necesitamos para cambiar el href del base.

Ahora, nos vamos al **package.json** y en la sección de **scripts** agregamos un script personalizado:
```json
"scripts": {
    .....
    "build": "ng build", <----- para hacer el build de producción normal
    "build:href": "ng build --base-href ./",  <----- para hacer el build de producción pero agregando siempre al base el h
    ....
  },
```
**NOTA**

Solo si nuestra aplicación es desplegada en un path adicional a nuestro dominio, por ejemplo: http://www.miweb.com/base-app/, donde
nuestra aplicación será desplegada en el path **/base-app**, entonces solo en ese caso, usaremos el comando con el que agregará el 
punto al href del tag base:
```
npm run build:href
```
Ahora, si nuestra aplicación siempre se desplegará en la raíz del dominio: http://www.miweb.com/, no necesitamos el punto en el tag
base del href, es decir, construimos nuestra aplicación con el comando de siempre:
```
ng build
```
## Automatizar para que siempre que se haga build de la aplicación, se nos cree el directorio /docs el que usamos en GitHub Pages
Si tenemos nuestra aplicación en GitHub Pages, este nos pide que el build de producción de nuestra aplicación esté en un directorio
llamado **/docs**, pero siempre que hacemos un **ng build** se nos crea el directorio **/dist/base-app/**. Podríamos automatizar
ese comportamiento para que siempre nos cree el directorio **/docs**.

Lo primero que haremos será instalar una dependencia de node para tener compatibilidad de comandos ya que algunos comandos funcionan en linux
otros en windows, etc. es decir, dependiendo del sistema operativo ejecutar los comandos respectivos para, por ejemplo: eliminar archivos.

```
npm i del-cli --save-dev
```
Entonces lo primero que haremos será eliminar el directorio **/docs**, para crear un nuevo directorio **/docs** con los nuevos cambios.
Usando la dependencia de del-cli, usamos su comando proporcionado para poder generar un scritps:
```json
 "scripts": {
    ....
    "delete:docs": "del docs"
  },
```
Para ejecutar dicho comando, mediante el cmd ejecutaríamos:
```
npm run delete:docs
```
Ahora, necesitamos copiar los archivos generados en la construcción de la aplicación de producción, pero para eso necesitamos
instalar otra dependencia:
```
npm i copyfiles --save-dev
```
Ahora, creamos el script que nos permitirá copiar los archivos y pegarlos en el directorio /docs
```json
 "scripts": {
    .......
    "copy:dist": "copyfiles dist/bases-app/* ./docs -f"
  },
```

Ahora, para ejecutar dicha copia:
```
npm run copy:dist
```

**NOTA**

Podría usar el comando propio de mi sistema operativo, es decir como estoy en windows, podría usar el comando que se usa mediante
cmd para poder eliminar un directorio o copiar archivos, pero usamos las dependencias instaladas para aumentar la compatibilidad, 
es decir, quizá alguien está usando mi proyecto en Linux o Mac, y esos comandos siempre funcionarán, para eso instalamos dichas
dependencias, solo por eso.

### Creando un solo comando para construir nuestro build de producción para GitHub Pages
Luego de crear los comandos anterior, para poder ejecutarlos en un solo comando todos ellos, creamos un scritp
que los ejecute en secuencia:
```json
"scripts": {
    .....
    "build:href": "ng build --base-href ./",
    "build:github": "npm run delete:docs && npm run build:href && npm run copy:dist",
    "delete:docs": "del docs",
    "copy:dist": "copyfiles dist/bases-app/* ./docs -f"
  },
```
Ahora, podemos ejecutar el comando que une los demás comandos para automatizar todo el proceso de construcción
de nuestro proyecto para ser subido a GitHub Pages

```bash
npm run build:github
```
