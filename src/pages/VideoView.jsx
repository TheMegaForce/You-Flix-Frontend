import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

const VideoView = () => {
    const { id } = useParams();
    const [video, setvideo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = `https://you-flix-backend.onrender.com/videos/${id}`;
        fetch(apiUrl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok" + res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                setvideo(data);
            })
            
            .catch((error) => {
                setError(error);
            });
    }, [id] );


    if (error) {
        return <p>Error loading video: {error.message}</p>;
    }

    if (!video) {
        return <p>Loading...</p>;
    }

    return (
        <div className="profile">
            <ReactPlayer
                url={video.url}
                width={"500px"}
                height={"300px"}
                light
                showPreview
            />
            <h3>Title: {video.title}</h3>
            <h3>Description: {video.description}</h3>
            <Link to={`/video/edit/${id}`} className="link-button">
                Edit Video
            </Link>
            <br/>
            <Link to={"/home"} className="link-button">Back to home</Link>
        </div>
    );
};

export default VideoView;
