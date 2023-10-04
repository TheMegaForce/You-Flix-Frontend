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
            <h1>Welcome {user.name}</h1>
        </div>
    )
}

export default Header