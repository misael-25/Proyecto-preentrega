import express from 'express'
import productController from '../controllers/products.controller.js'

const router = express.Router()

router.get('/products',productController.getAllProducts);

router.get('/products/:id',productController.getProductById);

router.delete('/products/:id',productController.deleteProductById);

router.post('/products/create',(req,res) => {
    res.send(`Creando producto nuevoo`)
});

export default router;