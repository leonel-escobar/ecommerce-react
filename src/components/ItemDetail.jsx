import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import './styles/ItemDetail.css'

function ItemDetail({item}) {
    const [changeBtn, setChangeButton] = useState(false)
    const {addToCart} = useCartContext()
    
    
    const onAdd = (total) => {
        addToCart(item, total)
        setChangeButton(true)   
    } 
    
    return(
        <div className="detail">
            <div className="detail__image">
                <img src={item.picture} alt="imagen" />
            </div>
            <div className="detail__info">
                <h3>{item.title}</h3>
                <span>{`$ ${item.price}`}</span>
                <p>{item.description}</p>
                {   
                    (changeBtn === false)
                    ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                    : <div className="buying-controller">
                        <Link to={"/"}>
                            <button className="button button--primary">Agregar mas</button>
                        </Link>
                        <Link to={"/cart"}>
                            <button className="button button--primary">Terminar compra</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default ItemDetail