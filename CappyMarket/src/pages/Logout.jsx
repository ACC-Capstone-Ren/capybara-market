import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";


export default function Logout() {
    
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    }

    return (
        <>
        <NavBar />
        <h4 className="subTitle">Bye...</h4>
        <button onClick={handleLogOut}>Logout</button>
        </>
    );

}