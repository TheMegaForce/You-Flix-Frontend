import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';

const EditUser = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    image: '',
    username: '',
    name: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = `https://you-flix-backend.onrender.com/users/${id}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setFormData({
          image: data.image,
          username: data.username,
          name: data.name,
        });
      })
      .catch((error) => console.error('Error:', error));
  }, [apiUrl]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(apiUrl, formData, navigate);
  };

  const updateUser = async (apiUrl, userData, navigate) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      await response.json();
      navigate(`/users/${id}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
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

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className='text-sky-500'>
      <Header/>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" className='text-sky-500 border-solid border-2 hover:animate-pulse'>Update</button>
      </form>
      <button onClick={handleDelete}>Delete User</button>
      <br/>
      <Link to={"/home"} className="link-button">Back to home</Link>
    </div>
  );
};

export default EditUser;
