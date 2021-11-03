import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getProducts } from "../services/getProducts"
import ItemList from './ItemList'
import './styles/ItemListContainer.css'

function ItemListContainer() {

    const [product, setProduct] = useState([])
    const {category} = useParams()

    useEffect(() => {
    
        if (category) {
            
            getProducts
            .then( res => {
                console.log("Success",res)
                setProduct(res.filter(el => el.category === category))
            })
            .catch(err => console.log("Error",err))

        } else {
        
            getProducts
            .then( res => {
                console.log("Success",res)
                setProduct(res)
            })
            .catch(err => console.log("Error",err))

        } 
    },[category])

    return (
        <div className="item-list-container">
            <ItemList items={product}/>
        </div>
    )  
}

export default ItemListContainer