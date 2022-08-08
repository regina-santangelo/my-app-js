import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const [quantity, setQuantity] = useState(0)
    
    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} de ${name}`)
        setQuantity(quantity)
    }
    
    return(
    <div className="detalle">
        <h3 className='tituloDetalle'>{name}</h3> 
        <img className='imagen' src={img}></img>
        <p className='descripcion'>{description}</p>
        <p className='stock'>Stock: {stock}</p>
        <p className='precio'>${price}</p>
        {quantity> 0 ? <Link className='linkFin' to= '/cart'>Finalizar compra</Link>:<Counter stock={stock} onAdd={handleOnAdd}/>}
    </div>
    )
}

export default ItemDetail
