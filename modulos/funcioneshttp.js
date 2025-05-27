

export async function ObtenerListaCompleta(){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data))
}



export async function ObtenerProducto(id) {


    fetch('https://fakestoreapi.com/products',{
        method:"GET",
        body: JSON.stringify({id:`${id}`})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.error("No se pudo encontrar el producto especificado"))
}



