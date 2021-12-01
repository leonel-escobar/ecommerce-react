import { Link } from 'react-router-dom'
import './styles/Item.css'

function Item({item}) {
    return(
        <div className="item">
            <Link to={`/details/${item.id}`}>
                <img src={item.picture} alt="Product" />
                <div className="item__info">
                    <h3>{item.title}</h3>
                    <span>$ {item.price}</span>    
                </div>
            </Link>  
        </div>
    )
}

export default Item