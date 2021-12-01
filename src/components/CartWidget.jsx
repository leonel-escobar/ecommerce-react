import {Link} from 'react-router-dom'
import cart from '../images/cart.png'
import { useCartContext } from '../context/CartContext'
import './styles/CartWidget.css'

function CartWidget() {
    const {cartWidgetQty} = useCartContext()

    return(
        <div className="cart-widget">
            <Link to="/Cart">
                <img className="cart-widget__icon" src={cart} alt="Cart icon" />
                <span className="cart-widget__count">{cartWidgetQty()}</span>
            </Link>
        </div>
    )
}

export default CartWidget