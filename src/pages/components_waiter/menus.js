import axios from 'axios'
import waiter from '../styles/Waiter.module.css'
import { useState, useEffect } from "react"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4MjYwNDUwNywiZXhwIjoxNjgyNjA4MTA3LCJzdWIiOiIzIn0.phmo6jlBwu-K6jvF78gOwIyFEVyi-89_5ZdVNnBB6kY"

function ProductsMenus(props) {
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
                    <button onClick={props.breakfast} className={waiter.addbtn} >Añadir</button>
                    </div>
                )
            })
        }
        </>
     )
}
function breakfast() {
    console.log('desayuno')
}

export default function Menus(){
    return (
      <div className={waiter.menuComp}>
        <h2 className={waiter.underline}>menús</h2>
        <div></div>
        <button className={waiter.desayunoBtn}>DESAYUNO</button>
        <button className={waiter.almuerzoBtn}>ALMUERZO</button>
        <ProductsMenus
        breakfast={breakfast}
        />
      </div>
    )
}