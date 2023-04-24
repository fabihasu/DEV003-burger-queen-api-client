import waiter from '../styles/Waiter.module.css'

export default function Orden(){
    return (
      <div>
        <h2>Orden</h2>
        <div></div>
        <div className={waiter.orderBox}>
            <input placeholder= "Cliente"/>
            <input placeholder= "Mesa"/>
            <p>Total</p>
        </div>
        
        <button>Limpiar Orden</button>
        <button>Enviar</button>
      </div>
    )
}
