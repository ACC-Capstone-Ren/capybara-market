import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../../API/Product";
import '../../style/productAll.css';

export default function ProductList(){
    const [products,setProducts] = useState([]);
    const [search, setSearch] = useState('')

    const navigate = useNavigate()

// getting all product data from API
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
    <div>
        <div className="search">
            <label html="search">
                Search: <input type="text" name="search" placeholder="... Jacket, Men, Shoes, Gaming ...    " id={search} onChange={(e) => {setSearch(e.target.value)}} />
            </label>
        </div>
            <div className="products">
                {filterProducts ? filterProducts.map(product => {
                    return (
                        <div key={product.id} className="product" >
                            <h4>{product.title}</h4>
                            <img src={product.image} width="50px" height="50px" />
                            <p>Price: ${product.price}</p>
                            <button onClick={()=>addToCart(product)}>Add to cart</button>
                            <button onClick={() =>{navigate(`/ProductSingle/${product.id}`)}}>See Details</button>
                        </div>
                    )
                }): null}
            </div>
        </div>
    )
}

