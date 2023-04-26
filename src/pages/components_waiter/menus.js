import axios from 'axios'
import waiter from '../styles/Waiter.module.css'
import { useState, useEffect } from "react"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4MjU0MDU3MSwiZXhwIjoxNjgyNTQ0MTcxLCJzdWIiOiIzIn0.1AECKwcdX56A765oKzf5T6clnUPx5E4S6ACds1oQ4XY"
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
      <div className={waiter.menuComp}>
        <h2 className={waiter.underline}>menús</h2>
        <div></div>
        <button className={waiter.desayunoBtn}>DESAYUNO</button>
        <button className={waiter.almuerzoBtn}>ALMUERZO</button>
        <ProductsMenus/>
      </div>
    )
}