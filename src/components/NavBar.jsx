import './styles/NavBar.css'

function NavBar() {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav__container'>
                    <div className='nav__title'>
                        <h1>Nombre de la tienda</h1>
                    </div>
                    <div className='nav__menu'>
                        <ul>
                            <li>Inicio</li>
                            <li>Sección 1</li>
                            <li>Sección 2</li>
                            <li>Sección 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar