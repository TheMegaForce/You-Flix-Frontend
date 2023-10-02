 import React, {useState} from 'react'
import { Form, Link, redirect, useLoaderData } from 'react-router-dom';
 
 const Login = (props) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const users = useLoaderData()

   const handleLogin = async () => {
      const user = users.find((u) => u.username === username && u.password === password);
  
      if (user) {
        console.log("Logged in");
      } else {
        alert('Invalid username or password');
      }
    };

   return (
    <div className="auth">
        <h2>Login</h2>
     <Form className= "login-page" onSubmit={handleLogin}>
        <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="Username" id="email" name="email" />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" id="password" name="password"/>
        <button type="submit">Login</button>
     </Form>
     <Link to="/signup" className="link-btn">Don't have an account? Register here.</Link>
     </div>
   )
 }
 
 export default Login