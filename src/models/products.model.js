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

export default {getAllProducts}