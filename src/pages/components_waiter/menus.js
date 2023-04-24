import Image from "next/image"
import axios from 'axios'
import { useState, useEffect } from "react"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RicUBnbWFpbC5jb20iLCJpYXQiOjE2ODIzNjY3NDMsImV4cCI6MTY4MjM3MDM0Mywic3ViIjoiMyJ9.pt4h3q9Iv6zjVArtu1GE1kmIo8wt6QNxxQvjuVuPd9E"
function ProductsMenus() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        
        axios({
            method : 'GET',
            url: 'http://localhost:8080/products',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => setProduct(response.data))
        .catch(console.log)
    }, [])
     
     return (
        <>
        {
            product.map(element => {
                return (
                    <div key={element.id}>
                    <img src={element.image} alt={element.name}/>
                    <p>{element.name} </p>
                    <p>{element.price} </p>
                    <button>Añadir</button>
                    </div>
                )
            })
        }
        </>
     )
}

export default function Menus(){
    return (
      <div>
        <h2>menús</h2>
        <div></div>
        <button>DESAYUNO</button>
        <button>ALMUERZO</button>
        <ProductsMenus/>
      </div>
    )
}