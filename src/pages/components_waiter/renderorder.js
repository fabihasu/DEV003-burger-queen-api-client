export default function RenderOrderProduct(props) {
    return (
        <>
            <button> - </button>
            <p>{props.qty}</p>
            <p>{props.name}</p>
            <p>${props.price}</p>
        </>
    )
}