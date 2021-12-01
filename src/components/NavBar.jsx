import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import brand_icon from '../images/brand_icon.png'
import './styles/NavBar.css'


function NavBar() {
    const [toggleMenu, setToggleMenu ] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener("resize", changeWidth)

        return () => {
            window.removeEventListener("resize", changeWidth)
        }

    },[])

    return (
        <header>
            <nav className="nav">
                <div className="container">
                    <div className="nav__container">
                        <div className="nav__icon">
                            <Link to="/">
                                <img src={brand_icon} alt="Brand icon" />
                            </Link>
                        </div>
                        {(toggleMenu || screenWidth > 480) && (
                        <div className="nav__menu">
                            <ul>
                                <li onClick={toggleNav}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li onClick={toggleNav}>
                                    <Link to="/categories/remeras">Remeras</Link>
                                </li>
                                <li onClick={toggleNav}>
                                    <Link to="/categories/buzos">Buzos</Link> 
                                </li>
                            </ul>
                        </div>)}
                        <CartWidget />
                        <div className="toggle-button" onClick={toggleNav}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar