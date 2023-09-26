import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', email: '' });
  const [shippingAddress, setShippingAddress] = useState({ streetAddress: '', city: '', postalCode: '', country: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', cardHolder: '', expirationDate: '', cvv: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()

  const handleInputChange = (e, stateSetter) => {
      const {name, value} = e.target;
      stateSetter({
          [name]: value,
      });
  };

  const handleCheckout = async () => {
    try {
      await simulatePayment();
      setPersonalInfo({ firstName: '',  lastName: '', email: '' });
      setShippingAddress({ streetAddress: '', city: '', postalCode: '', country: '' });
      setPaymentInfo({ cardNumber: '', cardHolder: '', expirationDate: '', cvv: '' });


      setSuccessMessage('Payment successful.');
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Payment');
      setSuccessMessage('');
    }
     localStorage.removeItem("MyCart");
     console.log("Purchase Complete")
  };


    const simulatePayment = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return Promise.resolve();
  };

  return (
    <div className="userDetails">
      <h1>Checkout</h1>
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
      <form>
        <h2>Personal Information</h2>
        <div>
          <div>
            <div>
              <label> First Name </label>
                 <input type="text" name="firstName" value={personalInfo.firstName} onChange={(e) => handleInputChange(e, setPersonalInfo)} />
            </div>
          </div>
          <div>
            <div>
              <label> Last Name </label>
                 <input type="text" name="lastName" value={personalInfo.lastName} onChange={(e) => handleInputChange(e, setPersonalInfo)} />
            </div>
          </div>
        </div>
        <div>
          <label> Email Address </label>
            <input type="email" name="email" value={personalInfo.email} onChange={(e) => handleInputChange(e, setPersonalInfo)} />
        </div>
        <h2>Shipping Address</h2>
        <div>
          <div>
            <div>
              <label> Street Address </label>
                <input type="text" name="streetAddress" value={shippingAddress.streetAddress} onChange={(e) => handleInputChange(e, setShippingAddress)} />
            </div>
          </div>
          <div>
            <div>
              <label> City </label>
                <input type="text" name="city" value={shippingAddress.city} onChange={(e) => handleInputChange(e, setShippingAddress)} />
            </div>
          </div>
          <div>
            <div>
              <label> Postal Code </label>
                <input type="text" name="postalCode" value={shippingAddress.postalCode} onChange={(e) => handleInputChange(e, setShippingAddress)} />
            </div>
          </div>
          <div>
            <div>
              <label> Country </label>
                <input type="text" name="country" value={shippingAddress.country} onChange={(e) => handleInputChange(e, setShippingAddress)} />
            </div>
          </div>
        </div>
        <h2>Payment Information</h2>
        <div>
          <label> Card Number </label>
          <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={(e) => handleInputChange(e, setPaymentInfo)} />
        </div>
        <div>
          <label> Card Holder </label>
          <input type="text" name="cardHolder" value={paymentInfo.cardHolder} onChange={(e) => handleInputChange(e, setPaymentInfo)} />
        </div>
        <div>
          <div>
            <div>
              <label> Expiration Date </label>
              <input type="text" name="expirationDate"value={paymentInfo.expirationDate} onChange={(e) => handleInputChange(e, setPaymentInfo)} />
            </div>
          </div>
          <div>
            <div>
              <label> CVV </label>
              <input type="text" name="cvv" value={paymentInfo.cvv} onChange={(e) => handleInputChange(e, setPaymentInfo)} />
            </div>
          </div>
        </div>
        <button onClick={handleCheckout}> Place Order </button>
        <br/>
        <button onClick={() =>{navigate('/Cart')}}>Back</button>
      </form>
    </div>
  );
}