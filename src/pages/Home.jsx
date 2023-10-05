import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Navigate, useLoaderData, useLocation } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
    const [style, setStyle] = useState("videoPlayer")
    const video = useLoaderData()
    const {state} = useLocation()
    const { user } = state

    if (user === null) {
        Navigate("/login")
    }

    const [clickedPlayerInfo, setClickedPlayerInfo] = useState(null);

    const handlePlayerStart = (url) => {
        // Find the video object based on the URL or any other unique identifier
        const clickedVideo = video.find(video => video.url === url);

        if (clickedVideo) {
            setClickedPlayerInfo(clickedVideo);
            console.log(clickedPlayerInfo);
        }
    };

    return (
        <div>
            <Header user={user}/>
            <br />
            <div className='home'>
                {video.map((v) => (
                    <div className='video'>
                        <div>
                            <ReactPlayer
                                url={v.url}
                                className={style}
                                width={"250px"}
                                height={"150px"}
                                onStart={() => handlePlayerStart(video.url)}
                                light
                                showPreview
                            />
                        </div>
                        <h1 className='w-[250px] bg-gradient-to-r from-sky-500 to-white'>{v.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home