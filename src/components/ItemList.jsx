import Item from "./Item"

function ItemList({items}) {
    
    return(
        <div className="products container">
            {items.map(product => <Item key={product.id} picture={product.picture} title={product.title} price={product.price}/>)}
        </div>
    )
}

export default ItemList