import ItemCount from './ItemCount'
import './styles/ItemListContainer.css'

function ItemListContainer({greeting}) {

    const onAdd = (total) => {
        return alert(total + " productos agregados")
    }

    return (
        <div className="greeting">
            <p>{greeting}</p>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
    )  
}

export default ItemListContainer