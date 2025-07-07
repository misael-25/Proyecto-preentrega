import productServices from '../services/products.services.js'

const getAllProducts = async (req,res) => {
    const productos = await productServices.getAllProducts()
    res.status(200).json(productos)
}

const getProductById = async (req,res) => {
    try{
        const idProducto = req.params.id;
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

const deleteProductById = async (req,res) => {
    const idProducto = req.params.id;
    try{
        const id = Number(idProducto)
        if(typeof id !== 'number' || isNaN(id)){
            res.status(400).json("El id debe ser un numero")
            return
        }
        
        const producto = await productServices.deleteProduct(idProducto)

        if(producto){
            res.status(200).json("producto eliminado")
        }else{
            res.status(404).json("Producto no encontrado")
        }
    }catch(error){
        console.log(error)
        res.writeHead(500, {'Content-type':'text/html'})
        res.end("<img src=https://http.cat/images/500.jpg alt='internal server error'/>")
    }
}

const createProduct = async (req,res) => {
    try{
        const {name, description, price} = req.body;

        if(name=== "" || description === ""){
            return res.status(400).json("El nombre y/o descripción no pueden estar vacios")
        }

        const priceNumb = Number(price)
        if(typeof priceNumb !== 'number' || isNaN(priceNumb)){
            return res.status(400).json("El precio debe ser un número")
        }

        const resultadoCreacion = await productServices.createProduct(name,description,price)
        if(resultadoCreacion){
            return res.status(201).json(req.body)
        }else{
            console.log(error)
            res.writeHead(500, {'Content-type':'text/html'})
            res.end("<img src=https://http.cat/images/500.jpg alt='internal server error'/>")
        }
    }catch(error){
        console.log(error)
        res.writeHead(500, {'Content-type':'text/html'})
        res.end("<img src=https://http.cat/images/500.jpg alt='internal server error'/>")
    }
}

export default {getAllProducts, getProductById, deleteProductById, createProduct};