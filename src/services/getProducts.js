import remera_negra from '../images/remera_negra.jpg'
import remera_gris from '../images/remera_gris.jpg'
import remera_js from '../images/remera_js.jpg'
import remera_react from '../images/remera_rjs.jpg'
import remera_doom from '../images/remera_doom.jpg'
import remera_doometernal from '../images/remera_doometernal.jpg'
import buzo_negro from '../images/buzo_negro.jpg'
import buzo_gris from '../images/buzo_gris.jpg'
import buzo_pi from '../images/buzo_pi.jpg'
import buzo_st from '../images/buzo_st.jpg'


const products = [
    {
        id: 1, 
        category: "remeras", 
        picture: remera_negra, 
        title: "Remera Negra", 
        price: 2100,
        stock: 2,
        description: "Remera negra lisa, manga corta, %100 algodón",
    },
    {
        id: 2, 
        category: "remeras", 
        picture: remera_gris, 
        title: "Remera Gris", 
        price: 2100,
        stock: 4,
        description: "Remera gris lisa, manga corta, %100 algodón",
    },
    {
        id: 3, 
        category: "remeras", 
        picture: remera_js, 
        title: "Remera JavaScript", 
        price: 2100,
        stock: 4,
        description: "Remera negra estampada, manga corta, %100 algodón",
    },
    {
        id: 4, 
        category: "remeras", 
        picture: remera_react, 
        title: "Remera React JS", 
        price: 2100,
        stock: 4,
        description: "Remera negra estampada, manga corta, %100 algodón",
    },
    {
        id: 5, 
        category: "remeras", 
        picture: remera_doom, 
        title: "Remera Doom", 
        price: 2800,
        stock: 3,
        description: "Remera negra estampada, manga corta, %100 algodón",
    },
    {
        id: 6, 
        category: "remeras", 
        picture: remera_doometernal, 
        title: "Remera Doom Eternal", 
        price: 2800,
        stock: 3,
        description: "Remera negra estampada, manga corta, %100 algodón",
    },
    {
        id: 7, 
        category: "buzos", 
        picture: buzo_negro, 
        title: "Buzo Negro", 
        price: 3200,
        stock: 2,
        description: "Buzo canguro negro liso",
    },
    {
        id: 8, 
        category: "buzos", 
        picture: buzo_gris, 
        title: "Buzo Gris", 
        price: 3200,
        stock: 2,
        description: "Buzo canguro gris liso",
    },
    {
        id: 9, 
        category: "buzos", 
        picture: buzo_pi, 
        title: "Buzo PI", 
        price: 3200,
        stock: 2,
        description: "Buzo canguro estampado",
    },
    {
        id: 10, 
        category: "buzos", 
        picture: buzo_st, 
        title: "Buzo Star Trek", 
        price: 3200,
        stock: 2,
        description: "Buzo canguro estampado",
    },
] 

export const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
        res(products)
    },2000)
})

export const getDetails = new Promise((res, rej) => {
    setTimeout(() => {
        res(products)
    },2000)
})
