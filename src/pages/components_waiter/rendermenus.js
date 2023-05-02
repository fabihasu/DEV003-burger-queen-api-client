import waiter from '../styles/Waiter.module.css'
import { TotalContext } from './totalContext'
import { useContext } from 'react'

export default function RenderMenus(props) {

    const [total, setTotal] = useContext(TotalContext)

    return (
        <div key={props.id} className={waiter.divproduct}>
          <img src={props.image} alt={props.name} className={waiter.images}/>
           <p className={waiter.product}>{props.name} </p>
            <p className={waiter.productprice} > ${props.price} </p>                
            <button onClick={() => {setTotal(total + props.price)}} className={waiter.addbtn} >Añadir</button>                
        </div>                  
    )                 
}