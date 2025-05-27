import {ObtenerListaCompleta, ObtenerProducto} from "./modulos/funcioneshttp.js"



//ahi anda
if(process.argv[3] === "GET"){
    const recurso = process.argv[4]

    //lista completa de productos
    if(recurso === "products" || recurso === "products/"){
        await ObtenerListaCompleta();
    }else 
    //producto en específico
    if(recurso.includes("/") && recurso[recurso.indexOf("/")+1]!==null  ){
        const id = recurso.slice(recurso.indexOf("/")+1);

        await ObtenerProducto(id)
    }
}

if(process.argv[3] === "POST"){
    //hombres trabajando
}

if(process.argv[3] === "DELETE"){
    
}

