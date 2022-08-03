import './Navbar.css'
import Cart from '../CartWidget/Cart';

const Navbar = () =>{
    return(
        <nav>
            <div className="navbar">
            <h2>E-Commerce</h2>
            </div>
            <div className="sections">
                <li className='lista'>Productos</li>
                <li className='lista'>Promociones</li>
                <li className='lista'>Envíos</li>
            </div>
            <Cart />
        </nav>
    )
}

export default Navbar;