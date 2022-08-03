import './ItemDetail.css'

const ItemDetail =({product})=>{
    return(
    <div className="detalle" key={product.id}>
        <h3 className='tituloDetalle'>{product.name}</h3> 
        <img className='imagen' src={product.img}></img>
        <p className='descripcion'>{product.description}</p>
        <p className='stock'>Stock: {product.stock}</p>
        <p className='precio'>${product.price}</p>
    </div>
    )
}

export default ItemDetail
