export default function RenderOrderProduct(props) {
    return (
        <>
            <button onClick={props.decreaseQty}> - </button>
            <p>{props.qty}</p>
            <p>{props.name}</p>
            <p>${props.price}</p>
        </>
    )
}