import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { addDoc, collection, getDocs, Timestamp, doc, query, where, documentId, writeBatch, updateDoc} from 'firebase/firestore'
import { db } from '../../services/firebase/index'

const Cart = () =>{
    const {getQuantity, cart, clearCart, getTotal} = useContext(CartContext)
    
    const total = getTotal()

    const quantity = getQuantity()

    const crearOrden = async () =>{
        try{
            const infoComprador = {
                buyer:{
                    name:'Regina',
                    phone:'11223344',
                    email:'asdasdasd'
                },
                items:cart,
                total,
                date: Timestamp.fromDate(new Date())
            }

            const ident = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productosFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ident)))
            const {docs} = productosFirestore
            const sinStock = []
            const batch = writeBatch(db)

            docs.forEach(doc => {
                const docData = doc.data()
                const stockActualizado = docData.stock
                const productosAgregados = cart.find(prod => prod.id === doc.id)
                const cantidadProductos = productosAgregados?.quantity

                if(stockActualizado >= cantidadProductos){
                    batch.update(doc.ref, {stock: stockActualizado - cantidadProductos})
                }else{
                    sinStock.push({id: doc.id, ...docData})
                }
            })

            if(sinStock.length === 0){
                const ordenRef = collection(db, 'orden')
                const ordenAgregada = await addDoc(ordenRef, crearOrden)
                batch.commit()
                console.log(ordenAgregada.id)
                clearCart()
            } else {
                console.log('productos fuera de stock')
            }

            // addDoc(collection(db, 'orden'), infoComprador).then(response =>{
            //     console.log(response)
            // })

        } catch (error) {
            console.log(error)
        } finally {
            console.log('Fin de la ejecución')
        }
    }

    if(quantity <= 0) {
        return (
            <h1 className='noProducts'>No hay productos en el carrito</h1>
        )
    }

    return(
        <div className='cart'>
            <h3 className='TuCarrito'>Tus productos</h3>
            { cart.map(p=> <CartItem key ={p.id} {...p}/>) }
            <p className='TotalPrecio'>Total: ${total}</p>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button onClick={crearOrden} className="Button">Crear orden de compra</button>
        </div>
    )
}

export default Cart