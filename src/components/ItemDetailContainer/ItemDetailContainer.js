import { useState, useEffect } from "react"
import { getItem } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=> {

    const [products, setProducts]= useState({})

    const {productId} = useParams()

    useEffect(() => {
        getItem(productId).then(response => {
            setProducts(response)
        })
    }, [productId])
    
    return(
        <div>
            <ItemDetail {...products}/>
        </div>
       
    )
}

export default ItemDetailContainer