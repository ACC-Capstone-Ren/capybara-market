import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/checkout.css';
import NavBar from '../components/NavBar';

export default function CheckOut() {
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({ 
    firstName: "",
    lastName: "",
    emailAddress: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    country: "",
    cardHolder: "",
    cardNumber: "", 
    expiryDate: "", 
    cvv: "" });

  const handlePayment = (e) => {
    e.preventDefault();
    setTimeout(() => { navigate("/PaymentSuccess"); }, 1200); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({ ...prevState, [name]: value, }));
  };


  return (
       <>
       <h4 className="title">Order Details</h4>
        <div className="checkoutWhole">
          <div className="checkoutContents">
            <h4 className="subTitle">Personal Information</h4>
            <form onSubmit={handlePayment} className="checkoutForm">
            <div>
              <input 
                type="text"
                name="firstName"
                className="checkoutData"
                placeholder="First Name"
                value={paymentInfo.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input 
                type="text"
                name="lastName"
                className="checkoutData"
                placeholder="Last Name"
                value={paymentInfo.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input 
                type="email" 
                name="emailAddress" 
                className="checkoutData"
                placeholder="Email Address"
                value={paymentInfo.emailAddress}
                onChange={handleChange}
              />
            </div>
            
            <h4 className="subTitle">Sending To</h4>
            <div>
              <input 
                type="text" 
                name="streetAddress"
                className="checkoutData"
                placeholder="Street Address"
                value={paymentInfo.streetAddress}
                onChange={handleChange}
              />
            </div>
            <div>
              <input 
                type="text" name="city"
                className="checkoutData"
                placeholder="City"
                value={paymentInfo.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <input 
                type="text" name="zipCode"
                className="checkoutData"
                placeholder="Zip Code"
                value={paymentInfo.zipCode}
                onChange={handleChange}
              />
            </div>
            <div>
              <input 
                type="text" name="country"
                className="checkoutData"
                placeholder="Country"
                value={paymentInfo.country}
                onChange={handleChange}
              />
            </div>
            <h4 className="subTitle">Payment Information</h4>
            <div>
                <input
                  type="text"
                  name="cardHolder"
                  className="checkoutData"
                  placeholder="Card Holders Full Name"
                  value={paymentInfo.cardHolder}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="cardNumber"
                  className="checkoutData"
                  placeholder="Card Number"
                  value={paymentInfo.cardNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="expiryDate"
                  className="checkoutData"
                  placeholder="Expire Date"
                  value={paymentInfo.expiryDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="cvv"
                  className="checkoutData"
                  placeholder="CVV"
                  value={paymentInfo.cvv}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btnCheckOut">Submit</button>
            </form>
          </div>
        </div>
    <NavBar />
  </>
  );
}