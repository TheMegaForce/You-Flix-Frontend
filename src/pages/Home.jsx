import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Navigate, useLoaderData, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Cookies from 'universal-cookie'

const Home = () => {

    const cookies = new Cookies()
    const navigate = useNavigate()

    const [style, setStyle] = useState("videoPlayer")
    const video = useLoaderData()
    const {state} = useLocation()
    const { user } = state

    return (
        <div>
            <Header />
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