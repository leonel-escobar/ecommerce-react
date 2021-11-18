import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { getFirestore } from '../services/getFirestore'
import firebase from 'firebase'
import 'firebase/firestore'
import './styles/Cart.css'

function Cart() {
    const [orderId, setOrderId] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const {cartList, totalPrice, removeItem, cleanCart} = useCartContext()

    const createOrder = (e) => {
        e.preventDefault()

        const order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = formData
        order.total = totalPrice()
        order.items = cartList.map(el => {
            const id = el.item.id;
            const title = el.item.title;
            const quantity = el.quantity;
            const price = el.item.price * el.quantity;

            return {id, title, quantity, price}
        })

        const dbQuery = getFirestore()
        dbQuery.collection("orders").add(order)
        .then(res => setOrderId(res.id))
        .catch(err => console.log(err))
        .finally(()=> setFormData({
            name: "",
            phone: "",
            email: ""
        }))

        const updateItems = dbQuery.collection("items").where(
            firebase.firestore.FieldPath.documentId(), "in", cartList.map(el => el.item.id)
        )

        const batch = dbQuery.batch()

        updateItems.get()
        .then(collection => {
            collection.docs.forEach(collectionItems => {
                batch.update(collectionItems.ref, {
                    stock: collectionItems.data().stock - cartList.find(el => el.item.id === collectionItems.id).quantity
                })
            })

        batch.commit()
        .then(res => console.log("Stock actualizado", res))
        .catch(err => console.log("Error de actualización de stock", err))
        })
    }

    const userData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <div className="cart container">
            <div className="cart__products">
                {(totalPrice() === 0) 
                ? <div className="cart__empty-products">
                    <p>El carrito está vacio</p>
                    <Link to="/">
                        <button className="button button--primary">
                            Agregar productos
                        </button>
                    </Link>   
                </div>
                : cartList.map(el =>
                    <div key={el.item.id} className="cart__card-products">
                        <img src={el.item.picture} alt="Imágen del producto" />
                        <div>
                            <h3>{el.item.title}</h3>
                            <span>Precio: ${el.item.price}</span>
                            <span>Cantidad: {el.quantity}</span>
                            <button className="button button--primary" onClick={() => removeItem(el.item.id)}>Eliminar</button>
                        </div>
                    </div>
                )}
            </div>

            {(totalPrice() !== 0)
            ?<div className="cart__purchase">
                 <div className="cart__price-purchase">
                    <span>Precio Total: ${totalPrice()}</span>
                    <button className="button button--primary" onClick={() => cleanCart()}>Vaciar carrito</button>
                    <div>
                        <form onSubmit={createOrder} onChange={userData}>
                            <input type="text" name="name" placeholder="Nombre" defaultValue={formData.name}/>
                            <input type="text" name="phone" placeholder="Teléfono" defaultValue={formData.phone}/>
                            <input type="email" name="email" placeholder="e-mail" defaultValue={formData.email}/>
                            <button className="button button--primary">
                                Comprar
                            </button>
                        </form>
                        {(orderId) !== "" && <p>El id de su compra es: {orderId}</p>}
                    </div>
                </div>
            </div> : null} 
        </div>
        )
}
                
export default Cart