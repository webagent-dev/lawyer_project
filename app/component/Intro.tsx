import React from 'react'
import '../styles/intro.css'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='intro_container'>
        <div className="intro_card">
           
            <h1 className="intro_header"><span className="intro_logo">Navbar</span> Lorem, ipsum dolor.</h1>
            <p className="intro_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae vero velit laboriosam consequatur.</p>
            <button className="intro_btn">Learn More...</button>
        </div>

        <div className="intro_card">
            <Image
            src='/img/lawyer.png' 
            layout='fill'
            alt=''
            objectFit='cover'
            />
        </div>
    </div>
  )
}

export default Intro