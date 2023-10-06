// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditUser = () => {
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     username: '',
//     name: '',
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
//     // Update User API call
//     fetch(apiUrl, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(() => {
//         navigate('/userprofile'); // or wherever you'd like to redirect to
//       })
//       .catch((error) => console.error('Error:', error));
//   };

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
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
    // Update User API call
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        navigate('/userprofile'); // or wherever you'd like to redirect to
      })
      .catch((error) => console.error('Error:', error));
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default EditUser;

