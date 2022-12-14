# RifaYakult

## Oscar Alfredo Belmont Rodríguez - A01654861
## Andrea Alessandra Villarruel Sernas - A01656255

### INSTRUCCIONES

Revisar si se tiene node instalado

Abrir la línea de comandos y ejecutar

```
node --version
```

Instalamos las dependencias con:

```
npm install
npm init
```

Agrega el paquete de Express.js a tu proyecto
Express.js es un paquete de npm que nos provee de infraestructura para crear aplicaciones web con Node.js.

Para agregar el paquete de Express.js ejecuta el siguiente comando en tu terminal:

```
npm i express
```

Antes de comenzar a trabajar, instalaremos nodemon para agilizar las recargas de la página:

```
npm install nodemon
```

Una vez que tengas estás modificaciones ejecuta el comando:

```
node index.js
```

Verás el siguiente resultado en la línea de comandos:

```
App listening on port 3000! (http://localhost:3000)
```

Si entras en tu navegador a la dirección http://localhost:3000 podrás ver tu web app en ejecución.

Para el uso correcto de la aplicación debemos crear una base de datos en nuestra computadora llamada:

```
DB_Yakult
```

A continucación ejecuta el siguiente comando para poder crear la tabla vacia.

```
knex migrate:latest
```

Para ejecutar el seed utilizamos el comando:

```
knex seed:run
```

Si vemos nuestra base de datos notaremos que ya se llena la tabla en nuestra base.

### .env

El archivo .env tiene que contener el siguiente bloque para que la configuración sea la adecuada para el proyecto:

```
NODE_ENV=development

EXPRESS_PORT=3000

DB_DEVELOPMENT_HOST=127.0.0.1
DB_DEVELOPMENT_PORT=3306
DB_DEVELOPMENT_NAME=DB_Yakult
DB_DEVELOPMENT_USER=root
DB_DEVELOPMENT_PASSWORD=

DB_DEVELOPMENT_HOST=127.0.0.1
DB_DEVELOPMENT_PORT=3306
DB_DEVELOPMENT_NAME=DB_Yakult
DB_DEVELOPMENT_USER=root
DB_DEVELOPMENT_PASSWORD=
```
