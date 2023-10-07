import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div id='intro'
    className='
    flex flex-col h-[100vh] items-center justify-center
    bg-gradient-to-r from-sky-500 to-white text-[10vh]
    '>
        <Link to={"/login"} className='hover:animate-pulse'>Login</Link>
        <h5>or</h5>
        <Link to={"/signup"} className='hover:animate-pulse'>Signup</Link>
    </div>
  )
}

export default Intro