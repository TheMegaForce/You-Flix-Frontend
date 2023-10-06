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

    const changeVideoSize = (e) => {
        
    }

    return (
        <div>
            <Header user={user}/>
            <br />
            <div className='home'>
                {video.map((v) => (
                    <div className='video'>
                        <div><ReactPlayer url={v.url} className={style} width={"250px"} height={"150px"} onStart={changeVideoSize} light showPreview/></div>
                        <h1 className='w-[250px] bg-gradient-to-r from-sky-500 to-white'>{v.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home