import waiter from '../styles/Waiter.module.css'
import { TotalContext } from './totalContext'
import { useContext } from 'react'
import { OrderContext } from './orderContext'
import RenderOrderProduct from './renderorder'

export default function Orden(){

  const [total, setTotal] = useContext(TotalContext) 
  const [order, setOrder] = useContext(OrderContext)
  console.log('order:,',order)
 
    return (
      <div className={waiter.orderComp}>
        <h2 className={waiter.underline}>orden</h2>
        <div></div>
        <div className={waiter.orderBox}>
            <input className= {waiter.client}placeholder= "Cliente"/>
            <input className= {waiter.table}placeholder= "Mesa"/>
             {
              order.map((item, index) =>{ 
                return (
                  <RenderOrderProduct
                  key={index}
                  qty={1}
                  name={item.name}
                  price={item.price}
                />
                )
              }) 
            }
              
            <p className={waiter.totalOrder}>Total: $ {total} </p>
        </div>

        <div className= {waiter.orderBtns}>
        <button onClick={() => {setTotal(0); setOrder([]) }} className={waiter.cleanOrder}>Limpiar Orden</button>
        <button className={waiter.sendKitchen}>Enviar</button>
        </div>

      </div>
    )
}
