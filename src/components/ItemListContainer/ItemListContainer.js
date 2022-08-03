import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import './ItemListContainer.css'

const ItemListContainer = (props)=>{
    const [products, setProducts]= useState([])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        getProducts().then(response =>{
            setProducts(response)
        }).catch(error =>{
            console.log('error')
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    const productosTransformados = products.map(product=>(
    <li className="listaProductos" key={product.id}>
        <h3>{product.name}</h3> 
        <img src={product.img}></img>
        <p>Stock: {product.stock}</p>
        <button className="botonProducto">Ver detalles</button>
        <p>${product.price}</p>
    </li>
    ))

    if(loading){
        return <h2>Espera mientras cargamos los productos...</h2>
    }
        
    return(
        <>
            <h2>{props.greeting}</h2>
            <div>
                {productosTransformados}
            </div>
        </>
    )
}

export default ItemListContainer