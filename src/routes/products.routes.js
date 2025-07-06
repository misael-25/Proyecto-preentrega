import express from 'express'

const router = express.Router()

router.get('/products',(req,res) => {
    res.send("Listado de productos")
});

router.get('/products/:id',(req,res) => {
    const idProducto = req.params.id;
    res.send(`Id de producto: ${idProducto}`)
});

router.delete('/products/:id',(req,res) => {
    const idProducto = req.params.id;
    res.send(`Id de producto a borrar: ${idProducto}`)
});

router.post('/products/create',(req,res) => {
    res.send(`Creando producto nuevoo`)
});

export default router;