import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { addDoc, collection, getDocs, Timestamp, doc, query, where, documentId, writeBatch, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import './Checkout.css'

const Checkout = () => {

    const {getQuantity, cart, clearCart, getTotal} = useContext(CartContext)

    const [nombre, setNombre] = useState("")

    const [email, setEmal] = useState("")

    const [number, setNumber] = useState(0)

    const total = getTotal()

    const quantity = getQuantity()

    const crearOrden = async () =>{
        try{
            const infoComprador = {
                buyer:{
                    name:nombre,
                    phone:number,
                    email:email
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
                const ordenAgregada = await addDoc(ordenRef, infoComprador)
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

    return (
        <div className='formulario'>
            <h2 className='title'>Completa tus datos</h2>
            <input type='text' placeholder='Nombre' onChange={(e) =>{setNombre(e.target.value);}}/>
            <input type= 'text' placeholder='E-mail' onChange={(e) => {setEmal(e.target.value);}}></input>
            <input type='number' placeholder='Teléfono' onChange={(e)=>{setNumber(e.target.value);}}></input>
            <button onClick={crearOrden} className="Button">Crear orden de compra</button>
        </div>
    )
}

export default Checkout