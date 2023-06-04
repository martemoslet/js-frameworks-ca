import { useContext } from "react"
import CartProducts from "./Cart";
import { CartContext } from "./CartProvider"
import styles from "./Button.module.css";
import { Link } from 'react-router-dom';
import Total from "./Total";

export default function Checkout () {
    const { cart } = useContext(CartContext);
    const { clearCart } = useContext(CartContext)
    return (
        <div>
            {cart?.length > 0 ? (<div>{cart.map((cartItem) => {
                return <CartProducts key={cartItem.id} cartItem={cartItem} />
            })}<Total /></div>)
            : (<div>Cart is empty</div>)}
            
            <Link to="/checkoutSuccessPage">
            <button className={styles.secondary} onClick={clearCart}>Checkout</button>
            </Link>
        </div>
    )
};
