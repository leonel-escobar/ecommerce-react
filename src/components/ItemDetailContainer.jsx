import { useState, useEffect } from 'react'
import { getItem } from '../services/getProducts'
import ItemDetail from './ItemDetail'
import './styles/ItemDetailContainer.css'

function ItemDetailContainer() {
    
    const [details, setDetails] = useState({})

    useEffect(() => {
        
        getItem
        .then( res => {
            
            setDetails(res)
            console.log("Success", console.log(res))
        })
        .catch( err => {

            console.log("Error", console.log(err))
        })

    },[])


    return(
        <div className="detailContainer container">
            <ItemDetail item={details}/>
        </div>
    )
}

export default ItemDetailContainer