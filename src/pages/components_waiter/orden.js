import waiter from '../styles/Waiter.module.css'

export default function Orden(){
    return (
      <div className={waiter.orderComp}>
        <h2>orden</h2>
        <div></div>
        <div className={waiter.orderBox}>
            <input className= {waiter.client}placeholder= "Cliente"/>
            <input className= {waiter.table}placeholder= "Mesa"/>
            <p className={waiter.totalOrder}>Total</p>
        </div>

        <div className= {waiter.orderBtns}>
        <button className={waiter.cleanOrder}>Limpiar Orden</button>
        <button className={waiter.sendKitchen}>Enviar</button>
        </div>

      </div>
    )
}
