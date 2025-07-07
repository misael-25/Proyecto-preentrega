import express from 'express'
import productController from '../controllers/products.controller.js'
import { authentication } from '../middlewares/authentication.js';

const router = express.Router()

router.get('/products',productController.getAllProducts);

router.get('/products/:id',productController.getProductById);

router.delete('/products/:id',authentication,productController.deleteProductById);

router.post('/products/create',authentication,productController.createProduct);

export default router;