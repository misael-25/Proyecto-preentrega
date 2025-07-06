import productServices from '../services/products.services.js'

const getAllProducts = async (req,res) => {
    const productos = await productServices.getAllProducts()
    res.status(200).json(productos)
}

const getProductById = async (req,res) => {
    const idProducto = req.params.id;
    try{
        const id = Number(idProducto)
        if(typeof id !== 'number' || isNaN(id)){
            res.status(400).json("El id debe ser un numero")
            return
        }
        
        const producto = await productServices.getProductById(idProducto)

        if(producto){
            res.status(200).json(producto)
        }else{
            res.status(404).json("Producto no encontrado")
        }
    }catch(error){
        console.log(error)
        res.writeHead(500, {'Content-type':'text/html'})
        res.end("<img src=https://http.cat/images/500.jpg alt='internal server error'/>")
    }
}

const deleteProductById = (req,res) => {

}

const createProduct = (req,res) => {

}

export default {getAllProducts, getProductById, deleteProductById, createProduct};