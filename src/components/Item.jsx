import { Link } from 'react-router-dom'
import './styles/Item.css'

function Item({item}) {
    return(
        <div className="item">
            <img src={item.picture} alt="Imagen" />
            <div className="item__info">
                <h3>{item.title}</h3>
                <span>$ {item.price}</span>
                <Link to={`/details/${item.id}`}>
                    <button className="button button--primary">
                        Detalles
                    </button>
                </Link>    
            </div>
        </div>
    )
}

export default Item