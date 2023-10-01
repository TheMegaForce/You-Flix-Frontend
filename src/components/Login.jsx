 import React, {useState} from 'react'
 
 const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
   return (
    <div className="auth">
        <h2>Login</h2>
     <form className= "login-page" onSubmit={handleSubmit}>
        <input value= {email} type = "email" onChange = {(e)=> setEmail(e.target.value)}placeholder = "Username" id = "email" name = "email" />
        <input value= {password} type="password" onChange = {(e)=> setPassword(e.target.value)} placeholder = "Password" id = "password" name = "password"/>
        <button type="submit">Login</button>
     </form>
     <button className = "link-btn" onClick={() => props.onPageSwitch("signup")}>Don't have an account? Register here.</button>
     </div>
   )
 }
 
 export default Login