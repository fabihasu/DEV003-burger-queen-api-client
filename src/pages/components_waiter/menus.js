import waiter from '../styles/Waiter.module.css'
import { useState, useContext, useEffect } from "react"
import RenderMenus from './rendermenus'
import { ProductsContext } from './productsContext'

function ProductsMenus() {

    const [filteredProduct, setFilteredProduct] = useState([])
    const productInfo = useContext(ProductsContext)
    
    useEffect(() => {
        setFilteredProduct(productInfo)
    }, [productInfo])

    function handleClick(event) {
        const buttonval = event.target.value;
        
        switch (buttonval) {
            case 'Desayuno': 
             setFilteredProduct(productInfo.filter(element => element.type === 'Desayuno'))
            break;

            case 'Almuerzo':
                setFilteredProduct(productInfo.filter(element => element.type === 'Almuerzo'))
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