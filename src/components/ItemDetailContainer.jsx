import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDetails } from '../services/getProducts'
import ItemDetail from './ItemDetail'
import './styles/ItemDetailContainer.css'

function ItemDetailContainer() {
    
    const [details, setDetails] = useState({})
    const {id} = useParams()

    useEffect(() => {
        
        getDetails
        .then( res => {
            
            setDetails(res.find(el => el.id === id))
            console.log("Success", console.log(res))
        })
        .catch( err => {

            console.log("Error", console.log(err))
        })
    
    },[id])


    return(
        <div className="detail-container container">
            <ItemDetail item={details}/>
        </div>
    )
}

export default ItemDetailContainer