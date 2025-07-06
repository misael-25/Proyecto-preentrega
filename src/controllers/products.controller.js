import productServices from '../services/products.services.js'

const getAllProducts = async (req,res) => {
    const productos = await productServices.getAllProducts()
    res.status(200).json(productos)
}

const getProductById = (req,res) => {

}

const deleteProductById = (req,res) => {

}

const createProduct = (req,res) => {

}

export default {getAllProducts, getProductById, deleteProductById, createProduct};