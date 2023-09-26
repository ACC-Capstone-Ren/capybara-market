import React from "react"
import { useNavigate } from "react-router-dom"


export default function PaymentSuccess() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h4 className="title">Payment Successful</h4>
                <button className="btnBack" onClick={() =>{navigate('/')}}>Back</button>

            </div>
        </>
    )
}