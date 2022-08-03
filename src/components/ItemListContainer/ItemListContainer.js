import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting})=>{
    const [products, setProducts]= useState([])
    const [loading , setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const categoria = categoryId ? getProductsByCategory : getProducts
        
        categoria(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    // useEffect(()=>{
    //     getProducts().then(response =>{
    //         setProducts(response)
    //     }).catch(error =>{
    //         console.log('error')
    //     }).finally(()=>{
    //         setLoading(false)
    //     })
    // }, [])

    if(loading){
        return <h2>Espera mientras cargamos los productos...</h2>
    }
        
    return(
        <>
            {/* <h2>{greeting}</h2> */}
            <div>
                <ItemList products={products}/>
            </div>
        </>
    )
}

export default ItemListContainer