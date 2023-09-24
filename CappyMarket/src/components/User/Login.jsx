import { userLogin } from "../../API/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();


        try {
            const response = await userLogin(username, password);
            console.log(response);
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("loggedIn", true);
            navigate("/");
          } catch (error) {
            console.error("Error", error);
            setError("error");
          }
        }
  
    async function openSignUpForm(e) {
        e.preventDefault();
        navigate("/SignUp");
        }

return (
        <>
            <div className="loginSignUp">
                <div className="loginCase">
                    <div className="title"> 
                        <h2>Login</h2> 
                    </div>
                    <div className="loginContents">
                        <form onSubmit={handleSubmit} className="loginForm">
                            <div className="formItem">
                                <label>
                                    <input type="text" className="username" onChange={(e) => {setUsername(e.target.value); }} />
                                </label>
                            </div>
                            <div className="formItem">
                                <label>
                                    <input type="password" className="password" onChange={(e) => { setPassword(e.target.value); }} />
                                </label>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    {error && <p>{error}</p>}
                </div>

                <div className="signUp2">
                    <div className="title">
                        <h2>Create an Account </h2>
                    </div>
                    <div className="join">
                        <button onClick={openSignUpForm}>Join Here</button>
                    </div>
                </div>
            </div>
        </>
    );

}