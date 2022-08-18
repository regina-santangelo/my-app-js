import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = ({ addItem })=> {

    const [product, setProduct]= useState({})
    const {productId} = useParams()

    useEffect(() => {
        getDoc(doc(db, 'products', productId)).then(response => {
            console.log(response)
            const values = response.data()
            const product = {id: response.id, ...values}
            
            setProduct(product)
        })
    }, [productId])
    
    return(
        <div>
            <ItemDetail {...product} addItem = {addItem}/>
        </div>
       
    )
}

export default ItemDetailContainer