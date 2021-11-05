import { useState } from 'react/cjs/react.development'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

function ItemDetail({item}) {
    const [changeBtn, setChangeButton] = useState(false)
    
    const onAdd = (total) => {
        alert(total + " productos agregados")
        setChangeButton(true)
        console.log(total)
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
                    : <Link to={"/cart"}>
                        <button className="button button--primary">Terminar compra</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail