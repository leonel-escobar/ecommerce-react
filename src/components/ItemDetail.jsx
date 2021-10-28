
function ItemDetail({item}) {
    return(
        <div className="detail">
            <div className="detail__image">
                <img src={item.picture} alt="imagen" />
            </div>
            <div className="detail__info">
                <h3>{item.title}</h3>
                <span>$ {item.price}</span>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail