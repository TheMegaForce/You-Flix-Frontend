import React, {useState} from 'react'
import { Form, Link, useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const Login = (props) => {
   const [formData, setFormData] = useState({
      username: '',
      password: ''
   })

   const user = useLoaderData()

   const navigate = useNavigate()

   const handleChange = ((e) => {
      const {name, value} = e.target
      setFormData({
         ...formData,
         [name]: value
      })
   })

   const handleLogin = async (e) => {
      try {
         const res = await axios({
            method: 'post',
            url: "https://you-flix-backend.onrender.com/users/login",
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' }}
         })
         
         if (res.data = "success") {
            const formUser = formData.username
            const foundUser = user.find((e) => e.username == formUser);
            navigate('/home', { state: { user: foundUser } });
          } else {
            alert('Invalid credentials. Please try again.');
          }
      } catch (error) {
         console.error(error)
      }
   }

   return (
   <div className="auth">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className='bg-red'>Login</button>
      </Form>
      <Link to="/signup" className="link-btn">Already have an account? Login here.</Link>
    </div>
   )
 }
 
 export default Login