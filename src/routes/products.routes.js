import express from 'express'
import productController from '../controllers/products.controller.js'

const router = express.Router()

router.get('/products',productController.getAllProducts);

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