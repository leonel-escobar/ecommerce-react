import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import brand_icon from '../images/brand_icon.png'
import './styles/NavBar.css'


function NavBar() {
    return (
        <header>
            <nav className='nav'>
                <div className='container'>
                    <div className='nav__container'>
                        <div className='nav__icon'>
                            <Link to="/">
                                <img src={brand_icon} alt="Icono de la marca" />
                            </Link>
                        </div>
                        <div className='nav__menu'>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/categories/remeras">Remeras</Link>
                                </li>
                                <li>
                                    <Link to="/categories/buzos">Buzos</Link> 
                                </li>
                                <li>
                                    <CartWidget />
                                </li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar