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

                function decreaseQty (){
                  setTotal(total - item.price)

                  if(order[index].qty > 1) {
                    order[index].qty = order[index].qty - 1

                  } else if(order[index].qty === 1) {
                    setOrder(order.filter(element => element.id !== item.id))
                  }
              }
                return (
                  <div key={index} className={waiter.divOrder}>
                  <RenderOrderProduct
                  name={item.name}
                  price={item.price}
                  qty={item.qty}
                  decreaseQty={decreaseQty}
                />
                </div>
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
