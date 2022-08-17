import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, stock, price }) => {
    return(
        <div className='productContainer'>
            <li className="listaProductos" key={id}>
                <h3>{name}</h3> 
                <img src={img}></img>
                <p>Stock: {stock}</p>
                <Link to={`/detail/${id}`} className="botonProducto">Ver detalles</Link>
                <p>${price}</p>
            </li>
        </div>
    
    )
    
}   

console.log(Item)

export default Item