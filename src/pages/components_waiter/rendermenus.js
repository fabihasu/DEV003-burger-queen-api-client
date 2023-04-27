import waiter from '../styles/Waiter.module.css'

export default function RenderMenus(props) {
    return (
        <div key={props.id} className={waiter.divproduct}>
          <img src={props.image} alt={props.name} className={waiter.images}/>
           <p className={waiter.product}>{props.name} </p>
            <p className={waiter.productprice} > ${props.price} </p>                
            <button className={waiter.addbtn} >Añadir</button>                
        </div>                  
    )                 
}