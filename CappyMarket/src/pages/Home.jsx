import NavBar from "../components/NavBar";
import ProductAll from "../components/Products/ProductAll"
import "../style/home.css";

export default function Home() {
    return (
        <>
        <h1>Welcome to CapyBara Market</h1>
        <NavBar />
        <ProductAll />
        </>
    );
}