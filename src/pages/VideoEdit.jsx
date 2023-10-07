import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

const VideoEdit = () => {
  const [video, setVideo] = useState(null);
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    description: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = 'https://you-flix-backend.onrender.com/videos/' + id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setVideo(data);
        setFormData({
          url: data.url,
          title: data.title,
          description: data.description,
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [apiUrl]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateVideo(apiUrl, formData, navigate);
  };

  const updateVideo = async (apiUrl, videoData, navigate) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoData),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      await response.json();
      navigate(`/video/${id}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        const response = await fetch(apiUrl, {
          method: 'DELETE',
        });

        if (!response.ok) throw new Error('Network response was not ok');

        navigate('/');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  if (!video) {
    return <p>Loading...</p>;
  }

  return (
    <div className='text-sky-500 auth'>
        <Header />
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div>
          <label htmlFor="url">Url: </label>
          <input
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className='text-sky-500 border-solid border-2 hover:animate-pulse'>Update</button>
      </form>
      <br/>
      <button onClick={handleDelete}>Delete Video</button>
      <br/>
      <Link to={"/home"} className="link-button">Back to home</Link>
    </div>
  );
};

export default VideoEdit;
