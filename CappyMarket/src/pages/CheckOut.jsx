import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
    const navigate = useNavigate();
        const PaymentForm = () => {
            const [paymentInfo, setPaymentInfo] = useState({ cardNumber: "", cardHolder: "", expiryDate: "", cvv: ""});
            
            const handlePayment = (e) => {
            e.preventDefault(); 
                const handleChange = (e) => {
                    const { name, value } = e.target;
                        setPaymentInfo((prevState) => ({...prevState, [name]: value,}));
                };
            }
        }

  return (
            <div>
                <h2>Payment Information</h2>
                
                <form onSubmit={ ... } className="checkout-form">
                
                <label> Card Number:
                    <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} className="checkout-input" />
                </label>
                
                <label> Card Holder:
                    <input type="text" name="cardHolder" value={paymentInfo.cardHolder} onChange={handleChange} className="checkout-input" />
                </label>
                
                <label> Expiry Date:
                    <input type="text" name="expiryDate" value={paymentInfo.expiryDate} onChange={handleChange} className="checkout-input" />
                </label>

                <label> CVV:
                    <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handleChange} className="checkout-input" />
                </label>

        <button type="submit" className="checkout-button">Submit</button>
      </form>
    </div>
  )

}