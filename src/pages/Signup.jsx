import React, {useState} from 'react'
import { Form, Link, redirect, useLoaderData } from 'react-router-dom';

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("");
  const users = useLoaderData()

  const handleSignup = async (e) => {
    users.push(e)
  };

  return (
    <div className='auth'>
        <h2>Signup</h2>
    <Form className= "signup-page" onSubmit={handleSignup}>
        <input type="name" onChange={(e)=> setName(e.target.value)} placeholder="Enter Full Name" id="name" name='name'/>
        <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="Username" id="username" name="username" />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" id="password" name="password"/>
        <button type="submit">Signup</button>
     </Form>
     <Link to="/login" className="link-btn">Already have an account? Login here.</Link>
    </div>
  )
}

export default Signup