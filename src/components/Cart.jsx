export default function CartProducts ({ cartItem }) {
    const { title, discountedPrice } = cartItem;

    return (
        <div>
            <h2>Product: {title}</h2>
            <p>Price {discountedPrice}</p>
        </div>
    )
};