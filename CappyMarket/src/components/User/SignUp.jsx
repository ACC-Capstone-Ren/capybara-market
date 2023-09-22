import { useNavigate } from "react-router-dom"
import { addUser } from "../../API/user"
import { useState } from "react"

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState(true);
    
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            if (password === confirmPassword) {
              const newUser = await addUser(username, email, password);
            if (newUser) {
              navigate("/login");
            }
          } else {
            setCheckPassword(false);
          }
        } catch (error) {
          console.error(`Error occured.`, error);
        }
      }

    return (
          <div>
                <div className="title">
                    <h1>Sign Up</h1>
                </div>

                <div className="signUpForm">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="userInfo">
                            <label>Username</label>
                                <input type="text" onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>

                        <div className="userInfo">
                            <label>Email</label>
                                <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>

                        <div className="userInfo">
                            <label>Password</label>
                                <input type="text" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>

                        <div>
                            <label>Retype New Password</label>
                                <input type="text" onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                              <div>
                                <button>Submit</button>
                              </div>
                        </div>
                    </form>
                  </div>
            </div>
         );
         
}