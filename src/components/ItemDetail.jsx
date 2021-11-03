import ItemCount from './ItemCount'

function ItemDetail({item}) {

    const onAdd = (total) => {
        return alert(total + " productos agregados")
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
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
            </div> 
        </div>
    )
}

export default ItemDetail