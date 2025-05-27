import {ObtenerListaCompleta} from "./modulos/funcioneshttp.js"


console.log(process.argv.slice(2));

//ahi anda
if(process.argv[3] === "GET"){
    ObtenerListaCompleta()
}else{
    console.log(`no`)
}

