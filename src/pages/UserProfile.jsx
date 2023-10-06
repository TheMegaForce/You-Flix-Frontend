// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";


// const UserProfile = () => {
//     const { id } = useParams();
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);

//  // Updated useEffect in UserProfile
// useEffect(() => {
//     const apiUrl = `https://you-flix-backend.onrender.com/users/${id}`;
//     fetch(apiUrl)
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error("Network response was not ok" + res.statusText);
//             }
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data);  // Log data for inspection
//             setUser(data);
//         })
        
//         .catch((error) => {
//             setError(error);
//         });
// }, [id]);


//     if (error) {
//         return <p>Error loading user: {error.message}</p>;
//     }

//     if (!user) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="profile">
//             <h2>Profile</h2>
//             <img src={user.image} alt={user.name} />
//             <h3>Username: {user.username}</h3>
//             <h3>Name: {user.name}</h3>
//             <Link to="/editprofile" className="link-btn">
//                 Edit Profile
//             </Link>
//         </div>
//     );
// };

// export default UserProfile;

//UserProfile.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";




const UserProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

 // Updated useEffect in UserProfile
useEffect(() => {
    const apiUrl = `https://you-flix-backend.onrender.com/users/${id}`;
    fetch(apiUrl)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok" + res.statusText);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);  // Log data for inspection
            setUser(data);
        })
        
        .catch((error) => {
            setError(error);
        });
}, [id]);


    if (error) {
        return <p>Error loading user: {error.message}</p>;
    }

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="profile">
            <h2>Profile</h2>
            <img src={user.image} alt={user.name} />
            <h3>Username: {user.username}</h3>
            <h3>Name: {user.name}</h3>
            <Link to={`/edit/${id}`} className="link-button">
                Edit Profile
            </Link>
        </div>
    );
};

export default UserProfile;
