import './Navbar.css'
import CartWidget from '../CartIcon/CartWidget';
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
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar;