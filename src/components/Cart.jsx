export default function CartProducts ({ cartItem }) {
    const { title, discountedPrice } = cartItem;

    return (
        <div>
            <h2>{title}</h2>
            <p>Price {discountedPrice} NOK</p>
        </div>
    )
};