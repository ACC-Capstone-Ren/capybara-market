import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../../API/Product";

export default function ProductList(){
    const [products,setProducts] = useState([]);
    const [search, setSearch] = useState('')
    const [cart, setCart] = useState([])

    const navigate = useNavigate()


// getting all products
useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchAllProducts();
      setProducts(productsData);
    };

    fetchData();
  }, []);


// search
    const filterProducts = search ? products.filter((product)=>
    product.title.toLowerCase().includes(search.toLowerCase())):products;


// add item to cart handler
    async function addToCartHandler(product){
            const productToadd = {
            productId: product.id,
            quantity: 1
        }

        const newCart = [
            ...cart, 
            productToadd
        ]
        console.log(newCart)

        try {
            const response = await fetch(`https://fakestoreapi.com/carts`, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId:1,
                    date:"",
                    products:newCart
                })
            })
            const result = await response.json();
            console.log({result});
            setCart(newCart)
        } catch(error){
            console.error(error)
        }
    }


return(
    <div className="app">
        <div className="search-box">
            <label html="search">
                Search: <input type="text" name="search" placeholder=" ... Jacket" id={search} onChange={(e) => {setSearch(e.target.value)}} />
            </label>
        </div>
            <div className="product-list">
                {filterProducts ? filterProducts.map(product => {
                    return (
                        <div className="product" key={product.id}>
                            <h4>{product.title}</h4>
                            <img src={product.image} width="50px" height="50px" />
                            <p>Price: ${product.price}</p>
                            <button onClick={()=>addToCartHandler(product)}>Add to cart</button>
                            <button className="detail-btn" onClick={() =>{navigate(`/ProductSingle/${product.id}`)}}>See Details</button>
                        </div>
                    )
                }): null}
            </div>
        </div>
    )
}