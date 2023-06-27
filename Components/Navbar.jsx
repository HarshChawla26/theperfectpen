import Link from 'next/link'
import React from 'react'
import '@styles/navbar.css'

export const Navbar = () => {
  return (
    /*z-10 fixed bg-0 bg-[#f1ded1] z-10 shadow md:shadow-md*/
    <nav className='z-10 fixed
    '>
      <div id='website-name' className='text-sec '>
      <Link href='/'><span>theperfectpen.co.in</span></Link>
      </div>
      <navbar id='navbar' className='text-sec hidden md:flex' >

        <Link href='/'>Home</Link>
        <Link href='/services'>services</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contacts</Link>
        <Link href='/admin'>Admin</Link>
      </navbar>
    </nav>
  )
}
