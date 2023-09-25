import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../../API/Product";

export default function ProductList(){
    const [products,setProducts] = useState([]);
    const [search, setSearch] = useState('')

    const navigate = useNavigate()


useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchAllProducts();
      setProducts(productsData);
    };
        fetchData();
  }, []);


const filterProducts = search ? products.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase())): products;


function addToCart(product){
    const existingCart = JSON.parse(localStorage.getItem('MyCart'))||[];
        console.log("Item Added to Cart");
    const existingProduct = existingCart.findIndex((item) => item.id === product.id )
    
    if
        (existingProduct !== -1) {
             existingCart[existingProduct].quantity += 1
     } else {
        existingCart.push({...product,  quantity: 1})
     }
        localStorage.setItem('MyCart', JSON.stringify(existingCart))
}


return(
    <div className="app">
        <div className="search">
            <label html="search">
                Search: <input type="text" name="search" placeholder=" ... Jacket" id={search} onChange={(e) => {setSearch(e.target.value)}} />
            </label>
        </div>
            <div className="productList">
                {filterProducts ? filterProducts.map(product => {
                    return (
                        <div className="product" key={product.id}>
                            <h4>{product.title}</h4>
                            <img src={product.image} width="50px" height="50px" />
                            <p>Price: ${product.price}</p>
                            <button onClick={()=>addToCart(product)}>Add to cart</button>
                            <button className="detail-btn" onClick={() =>{navigate(`/ProductSingle/${product.id}`)}}>See Details</button>
                        </div>
                    )
                }): null}
            </div>
        </div>
    )
}