import Item from "./Item"
import './styles/ItemList.css'

function ItemList({items}) {
    
    return(
        <div className="products container">
            {items.map(product => <Item key={product.id} item={product} />)}
        </div>
    )
}

export default ItemList