import {ObtenerListaCompleta, ObtenerProducto, BorrarProducto} from "./modulos/funcioneshttp.js"



//ahi anda
if(process.argv[3] === "GET"){
    const recurso = process.argv[4]

    //lista completa de productos
    if(recurso === "products" || recurso === "products/"){
        await ObtenerListaCompleta();
    }else 
    //producto en específico
    if(recurso.includes("/") && recurso[recurso.indexOf("/")+1]!==undefined  ){
        const id = recurso.slice(recurso.indexOf("/")+1);

        await ObtenerProducto(id)
    }
}

//agregar producto
if(process.argv[3] === "POST"){
    //hombres trabajando
}

//borrar un producto
if(process.argv[3] === "DELETE"){
    const recurso = process.argv[4]

    if(recurso.includes("/") && recurso[recurso.indexOf("/")+1]!==undefined  ){
        const id = recurso.slice(recurso.indexOf("/")+1);

        await BorrarProducto(id)
    }else{
        console.error("Debe ingresar un id de producto")
    }
}

