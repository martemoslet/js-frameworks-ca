import { Link } from 'react-router-dom';
import { CiShoppingCart} from "react-icons/ci";
import "../../App.css"

export default function Nav() {
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
                    <CiShoppingCart size={25} />
                    </button>
                    </Link>
                </li>
            </ul>
            
        </nav>
    );
}