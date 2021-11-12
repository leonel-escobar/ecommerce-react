import { createContext, useContext } from "react"
import { useState } from "react/cjs/react.development"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, quantity) => {
        
        const prodInCart = cartList.find(i => i.item.id === item.id)
        if (prodInCart) {

            prodInCart.quantity += quantity
            setCartList([...cartList])
        } else {

            setCartList([...cartList, {item, quantity}])
        }
        
    }
    console.log(cartList)

    const totalPrice = () => {
        return cartList.reduce((acc, el) => acc + (el.item.price * el.quantity), 0)
    }

    const cartWidgetQty = () => {
        return cartList.reduce((acc, el) => acc + el.quantity, 0)
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(i => i.item.id !== id))   
    }

    const cleanCart = () => {
        setCartList([])
    }
   
    return (
        <CartContext.Provider value={{cartList, setCartList, addToCart, totalPrice, cartWidgetQty, removeItem, cleanCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider