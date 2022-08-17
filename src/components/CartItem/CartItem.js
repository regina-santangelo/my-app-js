import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({id, name, price, quantity}) =>{
    const {removeItem} = useContext(CartContext)
    const quitar = (id)=>{
        removeItem(id)
    }

    return (
    <div className='CardItem'>
        <header className='HeaderCard'>
            <p className='nombreProducto'>{name}</p>
        </header>
        <div className='cantidadItem'>
            <p>Cantidad: {quantity}</p>
        </div>
        <div className='Price'>
            <p>Precio Unidad: {price}</p>
        </div>
        <div className='TotalPrice'>
            <p>Total: {price*quantity}</p>
        </div>
        <button className='quitarProducto' onClick={()=>quitar(id)}>x</button>
    </div>
)
}

export default CartItem