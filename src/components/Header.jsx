import React from 'react'
import axios from 'axios'

const Header = (props) => {
    const user = props.user

    return (
        <div className='border-solid border-2 border-sky-500 bg-sky-500 header'>
            <h1 className='youflix'>You-Flix</h1>
            <h1>Welcome {user.name}</h1>
        </div>
    )
}

export default Header