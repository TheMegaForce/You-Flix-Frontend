
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditUser = () => {
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     username: '',
//     name: '',
//     Image: null,
//     //... other fields
//   });
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const apiUrl = `https://you-flix-backend.onrender.com/users/${id}`;

//   useEffect(() => {
//     // Fetching the user data
//     fetch(apiUrl)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setFormData({
//           username: data.username,
//           name: data.name,
//           //... other fields
//         });
//       })
//       .catch((error) => console.error('Error:', error));
//   }, [apiUrl]);

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateUser(apiUrl, formData, navigate);
//   };

//   const updateUser = async (apiUrl, userData, navigate) => {
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) throw new Error('Network response was not ok');

//       await response.json();
//       navigate(`/users/${id}`);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   const deleteUserAction = async () => {
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'DELETE',
//       });

//       if (!response.ok) throw new Error('Network response was not ok');
      
//       // You might want to redirect the user to the home page or a user list
//       navigate('/'); 
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} encType='multipart/formData'>
//         <div>
//         <label htmlFor="image">Image:</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       {/* Add other fields as necessary */}
//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default EditUser;



// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditUser = () => {
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     username: '',
//     name: '',
//     image: null, // Add image to state
//     //... other fields
//   });
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const apiUrl = `https://you-flix-backend.onrender.com/users/${id}`;

//   useEffect(() => {
//     // Fetching the user data
//     fetch(apiUrl)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setFormData({
//           username: data.username,
//           name: data.name,
//           //... other fields
//         });
//       })
//       .catch((error) => console.error('Error:', error));
//   }, [apiUrl]);

//   const handleChange = (event) => {
//     const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;

//     setFormData({
//       ...formData,
//       [event.target.name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Use FormData for image file
//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     updateUser(apiUrl, data, navigate);
//   };

//   const updateUser = async (apiUrl, userData, navigate) => {
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'PUT',
//         // Don't set the Content-Type header,
//         // let the browser set it with the correct boundary
//         body: userData,
//       });

//       if (!response.ok) throw new Error('Network response was not ok');

//       await response.json();
//       navigate(`/users/${id}`);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <form onSubmit={handleSubmit} enctype="multipart/form-data">
//       {/* ... other fields ... */}
//       <div>
//         <label htmlFor="image">Image:</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default EditUser;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    //... other fields
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = `https://you-flix-backend.onrender.com/users/${id}`;

  useEffect(() => {
    // Fetching the user data
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
          username: data.username,
          name: data.name,
          //... other fields
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
    <div>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
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
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default EditUser;
