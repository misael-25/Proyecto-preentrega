Rutas

POST - /auth/login
Parámetros body:
  username: 'admin'
  password: 'admin'

Genera un token JWT de usuario

GET /api/products
muestra todos los productos disponibles

GET - /api/products/:id
Muestra un producto en particular

DELETE - /api/products/:id (REQUIERE TOKEN)
Parámetros Header:
  Authentication: Bearer (token)

Elimina un producto

POST - /api/products/create
Parámetros Header:
  Authentication: Bearer (token)

Parámetros Body:
  name: (texto)
  description: (texto)
  price: (numero)

crea un producto
