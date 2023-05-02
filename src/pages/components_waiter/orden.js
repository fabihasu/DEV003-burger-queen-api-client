import waiter from '../styles/Waiter.module.css'
import { TotalContext } from './totalContext'
import { useContext } from 'react'

export default function Orden(){

  const [total, setTotal] = useContext(TotalContext) 
  
    return (
      <div className={waiter.orderComp}>
        <h2 className={waiter.underline}>orden</h2>
        <div></div>
        <div className={waiter.orderBox}>
            <input className= {waiter.client}placeholder= "Cliente"/>
            <input className= {waiter.table}placeholder= "Mesa"/>
            <p className={waiter.totalOrder}>Total: $ {total} </p>
        </div>

        <div className= {waiter.orderBtns}>
        <button onClick={() => {setTotal(0)}} className={waiter.cleanOrder}>Limpiar Orden</button>
        <button className={waiter.sendKitchen}>Enviar</button>
        </div>

      </div>
    )
}
