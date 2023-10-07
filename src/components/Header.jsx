import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { usersLoader } from '../loader'


const Header = (props) => {
    const navigate = useNavigate()
    const cookies = new Cookies()
    
    const user = useLoaderData()
    const userCookie = cookies.getAll()


    const foundUser = user.find((e) => e == userCookie.id)


    const handleLogout = () => {
        cookies.remove(userCookie);
        navigate("/")
    }

    return (
        <div className='border-solid border-2 border-sky-500 bg-sky-500 header'>
            <div>
                <Link to={"/home"} className='youflix'>You-Flix</Link>
            </div>
                <Link to={"/video/add"}>Add New Video</Link>
                <Link to={"/users/" + userCookie.id}>Welcome {foundUser.name}</Link>
            <div>
                <Link onClick={handleLogout}>Logout</Link>
            </div>
        </div>
    )
}

export default Header