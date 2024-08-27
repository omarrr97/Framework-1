import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
<header className='bg-gray-700 text-blue-50 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between p-10'>
    
    <Link  className='text-4xl font-bold'>START FRAMEWORK</Link>
    <nav className=' text-xl'>
        <NavLink className='p-2 m-2 rounded-lg font-bold ' to='about'>ABOUT</NavLink>
        <NavLink className='p-2 m-2 rounded-lg font-bold' to='portofolio'>PORTOFOLIO</NavLink>
        <NavLink className='p-2 m-2 rounded-lg font-bold' to='contact'>CONTACT</NavLink>
    </nav>
</header>
)
}
