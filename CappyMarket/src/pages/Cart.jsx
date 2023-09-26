import MyCart from "../components/Cart/MyCart"
import NavBar from "../components/NavBar"
import '../style/cart.css';

export default function Cart() {
    return (
        <>
        <h1 className="title">Cart</h1>
        <NavBar />
        <MyCart />
        </>
    )
}