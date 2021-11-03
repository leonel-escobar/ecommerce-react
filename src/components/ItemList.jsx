import Item from "./Item"

function ItemList({items}) {
    
    return(
        <div className="products container">
            {items.map(product => <Item key={product.id} item={product} />)}
        </div>
    )
}

export default ItemList