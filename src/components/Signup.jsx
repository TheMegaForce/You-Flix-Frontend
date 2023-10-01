import React, {useState} from 'react'

const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

    }
  return (
    <div className='auth'>
        <h2>Signup</h2>
    <form className= "signup-page" onSubmit={handleSubmit}>
        <input value={name} type="name" onChange={(e)=> setName(e.target.value)} placeholder= "Enter Full Name"/>
        <input value= {email} type = "email" onChange = {(e)=> setEmail(e.target.value)}placeholder = "Username" id = "email" name = "email" />
        <input value= {password} type="password" onChange = {(e)=> setPassword(e.target.value)} placeholder = "Password" id = "password" name = "password"/>
        <button type="submit">Signup</button>
     </form>
     <button className= "link-btn" onClick={()=> props.onPageSwitch("login")}>Already have an account? Login here.</button>
    </div>
  )
}

export default Signup