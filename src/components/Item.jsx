
function Item({picture, title, price}) {
    return(
        <div className="item">
            <img src={picture} alt="/" />
            <div className="item__info">
                <h3>{title}</h3>
                <p>$ {price}</p>
                <button>
                    Detalles
                </button>
            </div>
        </div>
    )
}

export default Item