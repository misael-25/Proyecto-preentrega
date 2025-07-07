import productsModel from '../models/products.model.js'

const getAllProducts = () => {
    return productsModel.getAllProducts()
}

const getProductById = (id) => {
    const producto = productsModel.getProductById(id)

    if(producto){
        return producto
    }else{
        return undefined
    }
}

const deleteProduct = async(id) => {
    const producto = await productsModel.deleteProductById(id)

    if(producto){
        return true
    }else{
        return false
    }
}

const createProduct = async(name,description,price) => {
    const producto = await productsModel.createProduct(name,description,price)

    if(producto){
        return true
    }else{
        return false
    }
}

export default {getAllProducts,getProductById,deleteProduct,createProduct}