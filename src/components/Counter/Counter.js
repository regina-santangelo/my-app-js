import { useState } from "react";
import './Counter.css'

const Counter = ({stock = 0, initial = 1, onAdd})=>{
    const [quantity, setQuantity] = useState(initial)

    const decrement = ()=>{
        if(quantity > 1){
           setQuantity(quantity - 1) 
        }
    }

    const increment = ()=>{
        if(quantity < stock){
           setQuantity(quantity + 1) 
        }
    }

    return(
        <div className="counter">
            <div className="counter2">
                <button className="boton" onClick={decrement}>-</button>
                <p className="number">{quantity}</p>
                <button className="boton" onClick={increment}>+</button>
            </div>
            
            <button className="agregar" onClick={()=> onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter