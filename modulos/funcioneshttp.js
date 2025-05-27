

export async function ObtenerListaCompleta(){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data))
}



export async function ObtenerProducto(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(() => console.error("No se pudo encontrar el objeto especificado"))
}



export async function BorrarProducto(id) {
    fetch(`https://fakestoreapi.com/products/${id}`,{method:"DELETE"})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(() => console.error("No se pudo encontrar el objeto especificado"))
}

