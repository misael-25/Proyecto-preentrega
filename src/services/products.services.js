import productsModel from '../models/products.model.js'

const getAllProducts = () => {
    return productsModel.getAllProducts()
}




export default {getAllProducts}