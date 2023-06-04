import styles from "../components/Button.module.css"
import { Link } from 'react-router-dom';

export default function CheckoutSuccessPage() {
    return (
        <div className="checkout-card">
        <h1>Checkout success!</h1>
        <Link to="/">
            <button className={styles.primary}>Back to home page</button>
        </Link>
    </div>
    );
}