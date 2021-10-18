import './styles/ItemListContainer.css'

function ItemListContainer({greeting}) {
    return (
        <div className="greeting">
            <p>{greeting}</p>
        </div>
    )  
}

export default ItemListContainer