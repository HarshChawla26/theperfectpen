import Link from 'next/link'
import React from 'react'
import '@styles/navbar.css'

export const Navbar = () => {
  return (
    /* fixed bg-0 bg-[#f1ded1] z-10 shadow-sm*/
    <nav className='z-10
    '>
      <div id='website-name' className='text-sec'>
        <span>theperfectpen.co.in</span>
      </div>
      <navbar className='text-sec' id='navbar'>

        <Link href='/'>Home</Link>
        <Link href='/services'>services</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contacts</Link>
        <Link href='/admin'>Admin</Link>
      </navbar>
    </nav>
  )
}
