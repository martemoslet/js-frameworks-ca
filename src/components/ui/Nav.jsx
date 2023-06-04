import { Link } from 'react-router-dom';
import { CiShoppingCart} from "react-icons/ci";
import "../../App.css"
import { useContext } from 'react';
import { CartContext } from '../CartProvider';

export default function Nav() {
    const { cart } = useContext(CartContext)
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contactPage">Contact</Link>
                </li>
                <li>
                    <Link to="/checkoutPage">
                    <button className='cart-btn'>
                    {cart.length} <CiShoppingCart size={25} />
                    </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}