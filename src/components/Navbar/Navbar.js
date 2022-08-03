import './Navbar.css'
import Cart from '../CartWidget/Cart';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav>
            <div className="navbar">
            <Link to='/' className='ecommerce'>E-Commerce</Link>
            </div>
            <div className="sections">
                <Link to='category/cuerdas' className='Lista'>Cuerdas</Link>
                <Link to='category/pianos' className='Lista'>Pianos</Link>
                <li className='lista'>Envíos</li>
            </div>
            <Cart />
        </nav>
    )
}

export default Navbar;