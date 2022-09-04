import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () =>{
    const {getQuantity, cart, clearCart, getTotal} = useContext(CartContext)
    
    const total = getTotal()

    const quantity = getQuantity()


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
            <Link to= '/checkout'>Generar Orden</Link>
        </div>
    )
}

export default Cart