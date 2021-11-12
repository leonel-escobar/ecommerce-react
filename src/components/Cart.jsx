import {Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import './styles/Cart.css'

function Cart() {
    const {cartList, totalPrice, removeItem, cleanCart} = useCartContext()

    return(
        <div className="cart container">
            {
            (totalPrice() === 0) 
            ? <div className="cart__empty">
                <p>El carrito está vacio</p>
                <Link to="/">
                    <button className="button button--primary">
                        Agregar productos
                    </button>
                </Link>   
            </div>
            : cartList.map(el =>
                <div className="cart__product">
                    <img src={el.item.picture} alt="Imágen del producto" />
                    <div>
                        <h3>{el.item.title}</h3>
                        <span>Precio: ${el.item.price}</span>
                        <span>Cantidad: {el.quantity}</span>
                        <button className="button button--primary" onClick={() => removeItem(el.item.id)}>Eliminar</button>
                    </div>
                </div>
            )}
            
            {(totalPrice() !== 0)
            ? <div className="cart__price">
                <span>Precio Total: ${totalPrice()}</span>
                <button className="button button--primary" onClick={() => cleanCart()}>Vaciar carrito</button>
            </div>
            : null}
        </div>
        )
}
                
export default Cart
                
