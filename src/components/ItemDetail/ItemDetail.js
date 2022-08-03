import './ItemDetail.css'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    return(
    <div className="detalle">
        <h3 className='tituloDetalle'>{name}</h3> 
        <img className='imagen' src={img}></img>
        <p className='descripcion'>{description}</p>
        <p className='stock'>Stock: {stock}</p>
        <p className='precio'>${price}</p>
    </div>
    )
}

export default ItemDetail
