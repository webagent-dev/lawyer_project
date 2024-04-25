import React from 'react'
import  '../styles/navbar.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="container">
         <Link href='/' className='logo'>Navbar</Link>
         <ul className="list">
            <li className="list_item">
            <Link href='/route/about' className='list_link'>About</Link>
            </li>
            <li className="list_item">
            <Link href='/route/blog' className='list_link'>Blogs</Link>
            </li>
            <li className="list_item">
            <Link href='/route/service' className='list_link'>Services</Link>
            </li>
            <li className="list_item">
            <Link href='/route/contact' className='list_link'>Contact</Link>
            </li>
         </ul>
    </div>
   
  )
}

export default Navbar