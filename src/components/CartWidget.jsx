import cart from '../images/cart.png'
import './styles/CartWidget.css'

function CartWidget() {
    return(
        <>
            <img className="cart-icon" src={cart} alt="#" />
        </>
    )
}

export default CartWidget