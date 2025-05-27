import {hola} from "./modulos/proyectofinal.js"


console.log(process.argv.slice(2));

//ahi anda
if(process.argv[3] == "hola"){
    hola()
}else{
    console.log(`no`)
}

