import React, { useState } from 'react'
//import { useLoaderData, Form } from 'react-router-dom'

const Update = ({ post, onDelete = () => {} }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(post ? post.title : " ");
    const [editedDescription, setEditDescription] = useState(post ? post.description : " ");

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () =>{
        setIsEditing(false);
        if(post){
        setEditedTitle(post.title);
        setEditDescription(post.description);
        }
    };

    const handleSaveClick = ()=>{
        setIsEditing(false);
    };



  return (
    <li className={post ? post.item : " "}>
    <div className={post ? post.content : " "}>
    <h2>
          {isEditing ? (
            <input value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          ) : (
            post ? post.title : ''
          )}
        </h2>
        <p>
          {isEditing ? (
            <textarea value={editedDescription} onChange={(e) => setEditDescription(e.target.value)} />
          ) : (
            post ? post.description : ''
          )}
        </p>

        {isEditing ? (
            <div>
                <botton onClick={handleSaveClick}>Save</botton>
                <button onClick={handleCancelClick}>Cancel</button>
            </div>    
        ) : (
             <div>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={()=> onDelete(post ? post.id : null)}>Delete</button>
             </div>   
        )}
    </div>
    </li>
  )
}

export default Update