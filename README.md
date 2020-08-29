

## Instalar y ejecutar

```bash
# Install
$ npm install

# Run
npm run dev
```

## Uso

El proyecto expone los siguentes endpoint :

- `/api/helloworld` Para testear que nuestro proyecto esta funcionando
- `/api/users`     getList , delete, post , put
- `/api/products`  getOne,getList , delete, post , put



## Estructura del proyecto
```
backend-js-shopping
├── api
│    ├── helloWorld
│    │    ├── helloWorld.controller.js
│    │    └── index.js
│    ├── product
│    │    ├── product.controller.js
│    │    ├── product.model.js
│    │    └── index.js
│    └── user
│         ├── user.controller.js
│         ├── user.model.js
│         └── index.js
├── auth
│    ├── local
│    │    ├── passport.js
│    │    └── index.js
│    ├── auth.service.js
│    └── index.js
├── config
│    ├── environment
│    │    ├── development.js
│    │    ├── production.js
│    │    ├── shared.js
│    │    └── index.js
│    ├── express.js
│    └── local.env.js
├── app.js
├── routes.js
└── index.js
```
