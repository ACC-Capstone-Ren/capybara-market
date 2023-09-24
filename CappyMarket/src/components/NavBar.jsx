import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <h1>Welcome to CapyBara Market</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Profile">Profile</Link>
                </li>
                <li>
                    <Link to="/Cart">Cart</Link>
                </li>
                <li>
                    <Link to="/CheckOut">Checkout</Link>
                </li>
            </ul>
        </nav>
 );
}