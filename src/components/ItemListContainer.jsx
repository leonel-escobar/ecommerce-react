import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { getProducts } from "../services/getProducts"
import './styles/ItemListContainer.css'

function ItemListContainer({greeting}) {

    const onAdd = (total) => {
        return alert(total + " productos agregados")
    }

    const [product, setProduct] = useState([])

    useEffect(() => {
    
    getProducts
    .then( res => {
        console.log("Success",res)
        setProduct(res)
    })
    .catch(err => console.log("Error",err))
    
    },[])

    return (
        <div className="greeting">
            <p>{greeting}</p>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList items={product}/>
        </div>
    )  
}

export default ItemListContainer