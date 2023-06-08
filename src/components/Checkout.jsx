import { useContext } from "react";
import CartProducts from "./Cart";
import { CartContext } from "./CartProvider";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";
import Total from "./Total";
import Payment from "./Payment";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  return (
    <div>
      {cart?.length > 0 ? (
        <div>
          {cart.map((cartItem) => {
            return <CartProducts key={cartItem.id} cartItem={cartItem} />;
          })}
          <hr></hr>
          <Total />
          <h3 className="payment">Payment</h3>
          <Payment />
        </div>
      ) : (
        <h2 className="empty-cart">Cart is empty!</h2>
      )}

      {cart?.length > 0 ? (
        <Link to="/checkoutSuccessPage">
          <button className={styles.secondary} onClick={clearCart}>
            Checkout
          </button>
        </Link>
      ) : (
        <div className="empty-cart-btn">
          <Link to="/">
            <button className={styles.primary}>Back to home page</button>
          </Link>
        </div>
      )}
    </div>
  );
}
