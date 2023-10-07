import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useNavigate, useLoaderData, useLocation, Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {

    const navigate = useNavigate()

    const [style, setStyle] = useState("videoPlayer")
    const video = useLoaderData()

    const [clickedPlayerInfo, setClickedPlayerInfo] = useState(null);


    return (
        <div>
            <Header/>
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
                                light
                                showPreview
                            />
                        </div>
                        <Link to={'/video/' + v._id}>
                            <h1 className='w-[250px] bg-gradient-to-r from-sky-500 to-white'>
                                {v.title}
                            </h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
