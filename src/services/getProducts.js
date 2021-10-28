import remera_negra from '../images/remera_negra.jpg'
import remera_gris from '../images/remera_gris.jpg'
import remera_dt from '../images/remera_dt.jpg'
import remera_sx from '../images/remera_sx.jpg'
import remera_rb from '../images/remera_rb.jpg'
import remera_doom from '../images/remera_doom.jpg'
import buzo_bs from '../images/buzo_bs.jpg'
import buzo_bs2 from '../images/buzo_bs2.jpg'


const products = [
    {id: 1, picture: remera_negra, title: "Remera Negra", price: 2100},
    {id: 2, picture: remera_gris, title: "Remera Gris", price: 2100},
    {id: 3, picture: remera_dt, title: "Remera Dream Theater", price: 2500},
    {id: 4, picture: remera_sx, title: "Remera Symphony X", price: 2500},
    {id: 5, picture: remera_rb, title: "Remera Rainbow", price: 2800},
    {id: 6, picture: remera_doom, title: "Remera Doom", price: 2800},
    {id: 7, picture: buzo_bs, title: "Buzo Black Sabbath", price: 3200},
    {id: 8, picture: buzo_bs2, title: "Buzo Black Sabbath", price: 3200},
] 

export const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
        res(products)
    },2000)
})

const detail = {id: 1, picture: remera_negra, title: "Remera Negra", price: 2100, description: "Remera negra lisa, manga corta, %100 algodón"}

export const getItem = new Promise((res, rej) => {
    setTimeout(() => {
        res(detail)
    },2000)
})
