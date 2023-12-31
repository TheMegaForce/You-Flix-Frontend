import React, {useState} from 'react'
import { Form, Link, useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VideoPost = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
 })

 const videos = useLoaderData()

 const navigate = useNavigate()

 const handleChange = ((e) => {
    const {name, value} = e.target
    setFormData({
       ...formData,
       [name]: value
    })
 })

 const handleVideoPost = async (e) => {
  try {
    const res = await axios.post('https://you-flix-backend.onrender.com/videos/', formData);
    console.log(formData.url);
    console.log(res.data);
    
    if (res.data) {
        navigate('/video/' + res.data._id);
    } else {
        alert('Invalid credentials. Please try again.');
    }
  } catch (error) {
    console.error('Registration error', error.response);
  }}

  return (
   <div className="auth">
      <h2>Post a Video</h2>
      <Form onSubmit={handleVideoPost} className='signup-page'>
        <input
          type="text"
          name="url"
          placeholder="YouTube URL"
          value={formData.url}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit" className='text-sky-500 border-solid border-2 hover:animate-pulse'>Post Video</button>
      </Form>
      <Link to={"/home"}>Back to home</Link>
    </div>
  )
}

export default VideoPost