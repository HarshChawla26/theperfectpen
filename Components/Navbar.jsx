'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import '@styles/navbar.css'

export const Navbar = () => {
  const  [showEffect, setshowEffect] = useState(false)
  const showNav = () => {
    if(window.scrollY>50){
      setshowEffect(true)
    }else{
      setshowEffect(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',showNav)
    
    return () => {
      window.removeEventListener('scroll',showNav)
    }
  })
  

  return (
    <nav className={`z-10 fixed ${showEffect && 'bg-0 bg-hglt z-10 shadow md:shadow-md'}
    `}>
      <div id='website-name' className='text-sec '>
      <Link href='/'><span>theperfectpen.co.in</span></Link>
      </div>  
      <navbar id='navbar' className='text-sec hidden md:flex' >

        <Link href='/'>Home</Link>
        <Link href='/services'>services</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contacts</Link>
        {/* <Link href='/login'>Login</Link> */}
      </navbar>
    </nav>
  )
}
