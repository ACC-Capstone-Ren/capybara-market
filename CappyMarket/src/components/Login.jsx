import { userLogin } from "../API/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await userLogin(username, password);
            console.log(response);
      
            navigate("/");
          } catch (error) {
            console.error("Error", error);
            setError("Login error");
          }
        }
        async function openSignUpForm(e) {
          e.preventDefault();
          navigate("/Signup");
        }
        return (
        <>
            <div>
                <h1 className="title">Login</h1>
                <div className="loginForm"> 
                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                            <input type="text" onChange={(e) => {setUsername(e.target.value)}}/>
                            <br/>
                        <label>Password</label>
                            <input type="password" onChange={(e) => {setPassword(e.target.value)}}/> 
                            <br/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
          
        </>

        );


}