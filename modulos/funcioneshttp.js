

export async function ObtenerListaCompleta(){

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data))
}






