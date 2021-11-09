import { createContext, useContext } from "react"
import { useState } from "react/cjs/react.development"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item, quantity) {
        
        setCartList([...cartList, {item, quantity}])  
    }
    console.log(cartList)

   
    return (
        <CartContext.Provider value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider