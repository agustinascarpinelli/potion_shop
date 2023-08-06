# Potion Shop

## Inicio

- Para empezar se deben instalar las dependencias del proyecto con el comando `npm install`
- Luego se debe levantar el backend con el comando `npm run server`. El mismo corre localmente en el puerto _3001_
- Luego podemos levantar el frontend con el comando `npm start`. Esto levanta un servidor de desarrollo en el puerto _3000_

## Contexto

Este proyecto es un marketplace de pociones para nuestro héroe 🧙‍♂️, quien necesita comprar pociones para combatir a 🐉 y salvar al mundo. Sin embargo, ¡no se las regalaremos fácilmente! Vamos a aprovecharnos de su necesidad y ofrecerle un límite de 3 gemas para realizar sus compras. Además, debido a restricciones gubernamentales, solo puede comprar una poción de cada categoría. Y, por supuesto, respetaremos las órdenes de 🧝‍♀️, su esposa, para no venderle múltiples veces la misma poción.

## Rutas

- Productos: Para ver los productos disponibles el backend dispone de una ruta /productos a la que se puede acceder con el metodo GET

```
GET /productos
response: [
  {
    "id": 1,
    "nombre": "HP 500",
    "precio": 1,
    "categoria": "Salud",
    "descripcion": "Sube la vida del mago en 100 unidades",
    "imagen": "http://localhost:3000/Icon1.png"
  }
]
```

- Compras: Para realizar la compra el backend dispone una ruta /compras a la que se puede acceder con el metodo POST y se debe enviar un objeto con el formato { itemsId: ARRAY_IDS }, donde ARRAY_IDS es un array con los ids de las pociones compradas

```
POST /compras
body: { itemsId: [1,2,3,4] }
```


## Tecnologias utilizadas:

1. React.js
2. TypeScript
3. Axios
4. Styled Components
5. React Router DOM
6. React Spinners
7. JSON Server (para el backend de prueba)


## Demo

![Alt Text](./demo2.gif)
