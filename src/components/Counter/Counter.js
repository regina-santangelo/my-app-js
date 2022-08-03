import { useState } from "react";
import './Counter.css'

const Counter = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(0)

    const decrement = ()=>{
        if(count > initial){
           setCount(count - 1) 
        }
    }

    const increment = ()=>{
        if(count < stock){
           setCount(count + 1) 
        }
    }

    /*return(
        <div className="counter">
            <div className="counter2"><button className="boton" onClick={decrement}>-</button>
            <p className="number">{count}</p>
            <button className="boton" onClick={increment}>+</button></div>
            
            <button className="agregar" onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )*/
}

export default Counter