import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById } from "../../API/Product";
import NavBar from "../NavBar";
import '../../style/productSingle.css'

export default function ProductSingle(){
    const [product,setProduct] = useState({});

    const{id} = useParams()
    const navigate = useNavigate();


useEffect(() => {
    const fetchProduct = async () => {
        const productData = await fetchProductById(id);
        setProduct(productData);
    }; fetchProduct();
  }, [id]);


        if (!product) {
            return <div>Loading...</div>;
        }

    return (  
    <>
    <div className="products1">
        <div key={product.id} className="product1" >
            <h4>{product.title}</h4>
            <img src={product.image} width="50px" height="50px" />
            <p><strong>Category</strong>: {product.category}</p>
            <p><strong>Price</strong>: ${product.price}</p>
            <p><strong>Description</strong>: {product.description}</p>
            <button onClick={() =>{navigate('/')}}>Back</button>
        </div>
    </div>   
    <NavBar />
    </>
    )
}

    
