import { useState } from "react"
import './styles/ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const reduct = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const addToCart = () => {
        return onAdd(count)
    }

    return(
        <div className="counter">
            <div className="counter__control">
                <div>
                    <button className="button button--primary" onClick={reduct}>
                        -
                    </button>
                </div>
                <div>
                    <p>{count}</p>
                </div>
                <div>
                    <button className="button button--primary" onClick={add}>
                        +
                    </button>
                </div>
            </div>
            <div className="counter__add">
                <button className="button button--primary" onClick={addToCart}>
                    Agregar producto
                </button>
            </div>
        </div>
    )
}

export default ItemCount