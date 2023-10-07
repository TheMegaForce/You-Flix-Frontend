import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const user = props.user

    return (
        <div className='border-solid border-2 border-sky-500 bg-sky-500 header'>
            <div>
                <Link to={"/home"} className='youflix'>You-Flix</Link>
            </div>
                <Link to={"/users/" + user._id}>Welcome {user.name}</Link>
        </div>
    )
}

export default Header