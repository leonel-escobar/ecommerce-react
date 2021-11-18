import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../services/getFirestore'
import ItemDetail from './ItemDetail'
import './styles/ItemDetailContainer.css'
import loading_icon from '../images/loading.gif'

function ItemDetailContainer() {
    
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(() => {
        
        const db = getFirestore()
        const dbQuery = db.collection("items").doc(id).get()

        dbQuery
        .then(res => {

            setDetails({id: res.id, ...res.data()})
            console.log("Success", res)
        })
        .catch(err => {

            console.log("Error", err)
        })
        .finally(() => setLoading(false))

    },[id])

    return(
        <div className="detail-container container">
            {(loading)
            ?   <div className="loading">
                    <img src={loading_icon} alt="Cargando detalles" />
                </div>
            :   <ItemDetail item={details}/>}
        </div>
    )
}

export default ItemDetailContainer