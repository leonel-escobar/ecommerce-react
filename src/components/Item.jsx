import { Link } from 'react-router-dom'

function Item({item}) {
    return(
        <div className="item">
            <img src={item.picture} alt="Imagen" />
            <div className="item__info">
                <h3>{item.title}</h3>
                <p>$ {item.price}</p>
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