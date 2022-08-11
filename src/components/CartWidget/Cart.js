import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './Cart.css'

const Cart = () =>{
    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <Link to='/cart' className='cartDetails'>
            <img src="/images/carrito.png" className='cart'/>
            <p className='cartNumber'>{quantity}</p>
        </Link>
    )
}

export default Cart