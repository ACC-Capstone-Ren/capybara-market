import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/login.css";
import { fetchAllUsers } from "../../API/user";



async function loginUser(credentials) {
  return await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  const [status, setStatus] = useState();

  const navigate = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      const userData = await fetchAllUsers();
      setUser(userData);
    };
        fetchUser();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    console.log(token);
    if (token) {
      localStorage.setItem("userToken",token);
      setStatus("Login Successful")
      console.log("Successful")
      navigate("/");
} else { 
      setStatus("Login Failed.")
      console.log("Login Failed")
 
    }
  };

  async function openSignUpForm(e) {
    e.preventDefault();
    navigate("/SignUp");
    }


  return (
    <div className="loginSignUp">
        <div className="loginCase">
            <div> 
                <h4 className="title">Login</h4> 
            </div>
        <div className="loginContents">
            <form onSubmit={handleSubmit} className="loginForm">
                <div className="formItem">
                  <label>username: "mor_2314"</label>
                     <input type="text" placeholder="Username" name="usernameTextBox" className="username" onChange={(e) => {setUsername(e.target.value); }} />
                </div>
                <div>
                  <label>password: "83r5^_"</label>
                     <input type="password" placeholder="Password" name="passwordTextBox" className="password" onChange={(e) => { setPassword(e.target.value); }} />
                </div>
                <div>
                     <button className="btnSubmit" type="submit">Submit</button>
                     <button className="bkHome" type="backHome" onClick={() =>{navigate('/')}}>Go Back</button>
                </div>
                <div className="signUp2">
                    <div className="title">
                        <h4 className="subTitle">Create an Account </h4>
                    </div>
                    <div className="join">
                        <button className="btnSignUp" type="signUp" onClick={openSignUpForm}>Join Here</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>


  );
};

export default LoginForm;