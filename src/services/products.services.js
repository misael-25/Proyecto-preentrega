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



export default {getAllProducts,getProductById}