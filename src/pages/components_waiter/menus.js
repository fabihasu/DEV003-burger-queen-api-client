import Image from "next/image"
import axios from 'axios'
import { useState, useEffect } from "react"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4MjM1MTI3MywiZXhwIjoxNjgyMzU0ODczLCJzdWIiOiIzIn0.99WD4KPadSdosUFEzgjqRwbPGjYnhwRzvns-30uh0ng"
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