import {db} from '../data/data.js'
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'

const productsCollection = collection(db,'products')

const getAllProducts = async () => {
    const querySnapshot = await getDocs(productsCollection);
    const productos=[];
    querySnapshot.forEach((doc) => {
        productos.push({id:doc.id,...doc.data()})
    })
    return productos;
}

const getProductById = async (id) => {
    const producto = await getDoc(doc(productsCollection,id));

    if(producto.exists()){
        const datos = producto.data()
        datos.id = producto.id
        return datos
    }else{
        return undefined
    }    
}


const deleteProductById = async (id) => {
    const producto = await getDoc(doc(productsCollection,id));
    
    if(producto.exists()){
        try{
            await deleteDoc(doc(productsCollection,id))
            return true
        }catch{
            return false
        }
    }else{
        return false
    }   
}

export default {getAllProducts,getProductById, deleteProductById}