import './Navbar.css'
import Cart from '../CartWidget/Cart';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav>
            <div className="navbar">
            <Link to='/' className='ecommerce'>E-Commerce</Link>
            </div>
            <div className="sections">
                <NavLink to='category/cuerdas' className='Lista'>Cuerdas</NavLink>
                <NavLink to='category/pianos' className='Lista'>Pianos</NavLink>
                <li className='lista'>Envíos</li>
            </div>
            <Cart />
        </nav>
    )
}

export default Navbar;