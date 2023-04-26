import axios from 'axios'
import waiter from '../styles/Waiter.module.css'
import { useState, useEffect } from "react"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4MjQzOTYxMywiZXhwIjoxNjgyNDQzMjEzLCJzdWIiOiIzIn0.Te9fdDA2lVKXUB9v4ZTqWJ0DLHsicc4E1MSh-t_emr4";
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
                    <div key={element.id} className={waiter.divproduct}>
                    <img src={element.image} alt={element.name} className={waiter.images}/>
                    <p className={waiter.product}>{element.name} </p>
                    <p className={waiter.productprice} > ${element.price} </p>
                    <button className={waiter.addbtn} >Añadir</button>
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