import {ObtenerListaCompleta, ObtenerProducto, BorrarProducto, CrearProducto} from "./modulos/funcioneshttp.js"
import process from 'node:process'

//verifica que se haya escrito la palabra "products"
const recurso = process.argv[4]
if(!recurso.includes("products")){
        console.error("El recurso no es valido")
        process.exit()
}

//ahi anda
if(process.argv[3] === "GET"){
    //lista completa de productos
    if(recurso === "products"){
        await ObtenerListaCompleta();
    }
    //producto en específico
    if(recurso.includes("/") && recurso[recurso.indexOf("/")+1]!==undefined  ){
        const id = recurso.slice(recurso.indexOf("/")+1);

        await ObtenerProducto(id)
    }
}


//borrar un producto
if(process.argv[3] === "DELETE"){

    if(recurso.includes("/") && recurso[recurso.indexOf("/")+1]!==undefined){
        const id = recurso.slice(recurso.indexOf("/")+1);

        await BorrarProducto(id)
    }else{
        console.error("Debe ingresar un id de producto")
    }
}

//agregar producto
if(process.argv[3] === "POST"){
    const titulo = process.argv[5]
    const precio = process.argv[6]
    const categoria = process.argv[7]

    if(titulo!== undefined && precio!==undefined && categoria!==undefined){
        const productoNuevo = {
            title: titulo,
            price: precio,
            category: categoria
        }

        console.log(productoNuevo)
        await CrearProducto(productoNuevo)
    }else{
        console.error("Faltan datos para crear un producto nuevo, por favor ingrese nombre, precio y categoría (en ese orden).")
    }
}

