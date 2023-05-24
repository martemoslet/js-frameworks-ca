//import { ProductList } from './ProductList';
//import { useReducer } from 'react';
import styles from "./Button.module.css";
import { Link } from 'react-router-dom';

export function Checkout() {
    return (
        <div>
        <h1>Checkout</h1>
        <Link to="/checkoutSuccessPage">
            <button className={styles.primary}>Buy now</button>
        </Link>
    </div>
    )
}