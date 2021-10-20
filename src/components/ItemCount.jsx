import { useState } from "react"
import './styles/ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)

    const addToCart = () => {
        return onAdd(count)
    }

    return(
        <>
            <div className='counter'>
                <div>
                    <button className='button-primary' onClick={() => {if (count < stock) {setCount(count + 1)}}}>
                        +
                    </button>
                </div>
                <div>
                    <p>{count}</p>
                </div>
                <div>
                    <button className='button-primary' onClick={() => {if (count > initial) {setCount(count - 1)}}}>
                        -
                    </button>
                </div>
            </div>
            <div>
                <button className='button-primary' onClick={addToCart}>
                    Agregar producto
                </button>
            </div>
        </>
    )
}

export default ItemCount