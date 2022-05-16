# Burguenator
## _Ecommerce para comida rápida_

[![N|Solid](https://github.com/asimov86/proyectoreact/blob/main/public/favicon_react.ico)](https://reactjs.org/)


Burguenator es el proyecto de final de la carrera de Desarrollo FrontEnd con React que brinda CoderHouse. Está pensado para ser un ecommerce de comida rápida, especificamente un sitio de ventas de hamburguesas. Fue creado con la librería de JavaScript, React versión 17.0.2.

## Dependencias:
- React-bootstrap versión 2.2.2
- React-hook-form versión 7.30.0
- React-icons versión 4.3.1
- React-router-dom versión 6.3.0
- Firebase versión 9.6.11

## Características

- Realizar fácilmente la carga de los productos desde Firebase.
- Permite llevar el control del stock de cada producto, al actualizar el stock de manera automática luego de cada venta.
- Genera la orden de compra, identificando el cliente, los productos, la fecha de compra y el precio total.
- Permite filtrar por categoría de producto, haciendo más fácil la navegabilidad al usuario si se disponen de gran cantidad de productos.
- Tiene la opción de registrar la opinión del usuario en un formulario, este formulario se guarda en la colección FormContact en Firebase para su posterior análisis y así mejorar en aquellos puntos que el cliente percibe que se puede mejorar.

## Deploy

El deploy se hizo en Firebase por ello recomiendo hacer lo siguiente:

- Instalar la CLI de Firebase Tools

```sh
npm install -g firebase-tools
```

- Para el primer deploy realizar

```sh
firebase login
firebase init
```

> Note: Sin olvidar de usar build como public directory la primera vez.

## Para crear el build local con:

```sh
npm run build
firebase deploy
```

## Para clonar este repositorio.

```sh
git clone
npm install
npm start
```


![image](https://github.com/asimov86/proyectoreact/blob/main/src/img/demo_proyecto_react.gif)