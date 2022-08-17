import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <Link to='/cart' className='cartDetails'>
            <img src="/images/carrito.png" className='cart'/>
            <p className='cartNumber'>{quantity}</p>
        </Link>
    )
}

export default CartWidget