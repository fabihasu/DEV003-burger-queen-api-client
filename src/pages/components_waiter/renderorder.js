import waiter from '../styles/Waiter.module.css'

export default function RenderOrderProduct(props) {
    return (
        <>
        <div key={props.key} className={waiter.divOrder}>
            <button>-</button>
            <p>{props.qty}</p>
            <p>{props.name}</p>
            <p>${props.price}</p>
        </div>
        </>
    )
}