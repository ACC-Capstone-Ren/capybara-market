import { useNavigate } from "react-router-dom"
import { useState } from "react"
import '../../style/signUp.css'
import NavBar from "../NavBar"

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        
        
          try {
              const response = await fetch("https://fakestoreapi.com/users", {
                  method: "POST",
                  headers:{
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      email: email,
                      username: username,
                      password:password,
                  })
              })
              if(response.ok){
                  console.log("Sign Up Completed")
              } else {
                  console.log("Sign Up Failed")
              }
              navigate('/Profile')
          } catch(error){
              console.error(error)
          }
      

      }

    return (
          <div>
            <NavBar /> 
                <div className="title">
                    <h4>Sign Up</h4>
                </div>
                <div className="signUpForm">
                    <form onSubmit={handleSubmit}>
                        <div className="userInfo">
                                <input type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>
                        <div className="userInfo">
                                <input type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="userInfo">
                                <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                        <div className="userInfo">
                                <input type="text" placeholder="Retype New Password" onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                              <div>
                                <button>Enter</button>
                                <br/>
                                <button onClick={() =>{navigate('/Profile')}}>Back</button>
                              </div>
                        </div>
                    </form>
                  </div>
            </div>
        
         );
         
         
}