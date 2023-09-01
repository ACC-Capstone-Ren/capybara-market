import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <div className="navBarContainer">
                <div className="menuContainer">
                    <div className="loginContainer">
                        <div className="loginMenu"> 
                            <link to="/login">Login</link>
                            <link to="/signup">Signup</link>
                        </div>
                    </div>
                    <div className="navigationMap">
                        <link to="/cart">Cart</link>
                        <form className="searchContainer">
                            <input className="searchBar" type="text" placeholder="Search your keywords here..."/>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}