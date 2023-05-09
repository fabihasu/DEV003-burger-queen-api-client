import waiter from '../styles/Waiter.module.css'
import { TotalContext } from './totalContext'
import { useContext } from 'react'
import { OrderContext } from './orderContext'
import RenderOrderProduct from './renderorder'
import { useState } from 'react'
import axios from 'axios'
import { token } from './productsContext'
import { showDate } from './date'

export default function Orden(){

  const [client, setClient] = useState('')
  const [total, setTotal] = useContext(TotalContext) 
  const [order, setOrder] = useContext(OrderContext)
  const [orderId, setOrderId] = useState(0)
  

  function handleChangeName(event) {
    setClient(event.target.value)
  }

  function sendToKitchen() {
    setOrderId(orderId + 1)
    setClient('')
    setOrder([])
    setTotal(0)
    
    const orderData = {
      id: orderId,
      userId: 3,
      client: client,
      products: order,
      status: 'pending',
      dataEntry: showDate()
    }
    
    axios.post('http://localhost:8080/orders', orderData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
   .then(console.log)
   .catch(console.log)

  }

    return (
      <div className={waiter.orderComp}>
        <h2 className={waiter.underline}>orden</h2>
        <div></div>
        <div className={waiter.orderBox}>
            <input onChange={handleChangeName} className= {waiter.client}placeholder= "Cliente" value={client}/>
            <input className= {waiter.table}placeholder= "Mesa"/>
             {
              order.map((item, index) =>{
           
                function decreaseQty (){
                  setTotal(total - item.product.price)

                  if(order[index].qty > 1) {
                    order[index].qty = order[index].qty - 1

                  } else if(order[index].qty === 1) {
                    setOrder(order.filter(element => element.product.id !== item.product.id))
                  }
              }
                return (
                  <div key={index} className={waiter.divOrder}>
                  <RenderOrderProduct
                  name={item.product.name}
                  price={item.product.price}
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
        <button onClick={() => {setTotal(0); setOrder([]); setClient('') }} className={waiter.cleanOrder}>Limpiar Orden</button>
        <button onClick={sendToKitchen} className={waiter.sendKitchen}>Enviar</button>
        </div>

      </div>
    )
}
