import axios from 'axios'
import waiter from '../styles/Waiter.module.css'
import { useState, useEffect } from "react"
import RenderMenus from './rendermenus'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYWx1aXNhQGdtYWlsLmNvbSIsImlhdCI6MTY4MjYxNjg4NywiZXhwIjoxNjgyNjIwNDg3LCJzdWIiOiIzIn0.oO_HNg3nKUoZSqxBOGmrQlXfl5IH_2ZhJP9ZyZdrcmI"

function ProductsMenus() {
    const [product, setProduct] = useState([])
    const [filteredProduct, setFilteredProduct] = useState([])

    useEffect(() => {
        
        axios({
            method : 'GET',
            url: 'http://localhost:8080/products',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setProduct(response.data)
            setFilteredProduct(response.data)
        })
        .catch(console.log)
    }, [])

    
    function handleClick(event) {
        const buttonval = event.target.value;
        
        switch (buttonval) {
            case 'Desayuno': 
             setFilteredProduct(product.filter(element => element.type === 'Desayuno'))

            break;

            case 'Almuerzo':
                setFilteredProduct(product.filter(element => element.type === 'Almuerzo'))
            break;

            //no default
        }
    } 

    return (
     <>
      <button onClick={handleClick} value='Desayuno' className={waiter.desayunoBtn}>DESAYUNO</button>
      <button onClick={handleClick} value='Almuerzo' className={waiter.almuerzoBtn}>ALMUERZO</button>
        {
            filteredProduct.map(item => {
                return (
                    <>
                    <RenderMenus
                 id={item.id}
                 image={item.image}
                 name={item.name}
                 price={item.price}
                />
                    </>
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
        <ProductsMenus/>

      </div>
    )
}