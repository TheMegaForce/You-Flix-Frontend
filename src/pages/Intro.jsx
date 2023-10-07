import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div id='intro'
    className='
    flex flex-col h-[100vh] items-center justify-center
    bg-gradient-to-r from-sky-500 to-white
    '>
        <h6 className='text-[10vh] border-2 rounded-xl border-black'>You-Flix</h6>
        <br/>
        <br/>
        <br/>
        <Link to={"/login"} className='hover:animate-pulse text-[7vh]'>Login</Link>
        <h5 className='text-[5vh]'>or</h5>
        <Link to={"/signup"} className='hover:animate-pulse text-[7vh]'>Signup</Link>
    </div>
  )
}

export default Intro