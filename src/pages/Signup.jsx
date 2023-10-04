import React, {useState} from 'react'
import { Form, Link, useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    img: '',
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

 const handleSignup = async (e) => {
  try {
    const res = await axios({
      method: 'post',
      url: "https://you-flix-backend.onrender.com/users/register",
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' }}
    })
    
    if (res.data = "success") {
      navigate('/login');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  } catch (error) {
    console.error(error)
  }}

  return (
   <div className="auth">
      <h2>Signup</h2>
      <Form onSubmit={handleSignup} className='signup-page'>
      <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="Image Link"
          value={formData.img}
          onChange={handleChange}
        />
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
        <button type="submit" className='bg-red'>Signup</button>
      </Form>
     <Link to="/login" className="link-btn">Already have an account? Login here.</Link>
    </div>
  )
}

export default Signup