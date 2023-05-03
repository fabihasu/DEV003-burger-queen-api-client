import waiter from '../styles/Waiter.module.css'
import { TotalContext } from './totalContext'
import { useContext } from 'react'
import { OrderContext } from './orderContext'

export default function RenderMenus(props) {

    const [total, setTotal] = useContext(TotalContext)
    let [order, setOrder] = useContext(OrderContext)

    const toOrder = () => {
        setTotal(total + props.price)

        // setOrder(() => { 
        //     order ??=  {}
        //     const bbb = order.products = [props]
        //     return Object.assign(order, bbb)
        // })

        const orderToAdd = {
            id: props.id,
            image: props.image,
            name: props.name,
            price: props.price
        }

        setOrder(order.concat([orderToAdd]))
        
    }
    
    return (
        <div key={props.id} className={waiter.divproduct}>
          <img src={props.image} alt={props.name} className={waiter.images}/>
           <p className={waiter.product}>{props.name} </p>
            <p className={waiter.productprice} > ${props.price} </p>                
            <button onClick={toOrder} className={waiter.addbtn} >Añadir</button>                
        </div>                  
    )                 
}