import { useEffect, useState } from "react"
import { useNavigate, } from "react-router-dom"


export default function Cart(){
    const [carts,setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [total, setTotal] = useState(calculateTotal(carts))

    const navigate = useNavigate()

    useEffect(()=>{
        const storeCartData = localStorage.getItem('MyCart');
            if(storeCartData){
                try {
                    const parsedCartData = JSON.parse(storeCartData);
                    setCarts(parsedCartData);
                    setLoading(false)
                } catch(error){
                    console.error(error)
                    setError()
                }
        }else {
            setLoading(false)
        }
    },[])


     async function deleteCartHandler(deleteCartId){
        const cartId = 1

        try{
            const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`, {
                method:"DELETE"
            });

        if(response.ok){
            const updateCart = carts.filter((cartItem)=> cartItem.id !== deleteCartId)
            setCarts(updateCart)
            localStorage.setItem('MyCart', JSON.stringify(updateCart))
            console.log("Item Removed")
        } else {
            console.error("unable to delete item in cart",error)
            }
        } catch (error){
            console.error(error)
        }
    }


    async function increaseQuantity(cartItemId){
        const updateCart = carts.map((cartItem)=> {
            if((cartItem.id) === cartItemId) {
                return {...cartItem, quantity: cartItem.quantity + 1}
            }
            return cartItem
        })
        setCarts(updateCart)
        localStorage.setItem('MyCart', JSON.stringify(updateCart))
        console.log("Item Quantity Increased")
    }


    async function decreaseQuantity(cartItemId){
        const updateCart = carts.map((cartItem)=>{
            if((cartItem.id) === cartItemId){
                return {...cartItem, quantity: cartItem.quantity - 1}
            }
            return cartItem
        })
        setCarts(updateCart)
        localStorage.setItem('MyCart', JSON.stringify(updateCart))
        console.log("Item Quantity Decreased")
    }


    function calculateTotal(cartItems){
        return cartItems.reduce((total, cartItems)=>{
            const subTotal = cartItems.price * cartItems.quantity;
            return total + subTotal
        }, 0)
    }


    useEffect(()=>{
        const newPrice = calculateTotal(carts);
        setTotal(newPrice)
    }, [carts])


        if(loading){
            return <p>Loading ...</p>
        }
        if(error){
            return <p>Error: {error}</p>
        }


    return(
        <div className="userCart">
            <h1>Cart</h1>
            {carts && carts.map((cartItem)=>(
                <div key={cartItem.id}>
                    <div>
                        <h3>{cartItem.title}</h3>
                        <img src={cartItem.image} alt={cartItem.title} width="50px" height="50px" />
                        <p>Price: ${cartItem.price}</p>
                        <p>Quantity: {cartItem.quantity}</p>
                        <button onClick={()=>decreaseQuantity(cartItem.id)}>-</button>
                        <button onClick={()=>deleteCartHandler(cartItem.id)}>Remove Item</button>
                        <button onClick={()=>increaseQuantity(cartItem.id)}>+</button>
                    </div>
                </div>
            ))}
            <p>Your Total: ${total}</p>
            <button onClick={()=>{navigate('/CheckOut')}}>CheckOut</button>
            <br/>
            <button onClick={() =>{navigate('/')}}>Back</button>
        </div>
    )
}