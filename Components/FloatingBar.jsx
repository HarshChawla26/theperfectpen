'use client';
import React, { useState } from 'react'
import '@styles/FlBar.css'
import Link from 'next/link'
function FloatingBar() {
    
  const [showFooBar, setshowFooBar] = useState(false)

  function handleFloat(){
    if(showFooBar){
        setshowFooBar(false)
    }else{
        setshowFooBar(true)
    }
  }

  return (
    <>
    <div id='Tos-container' onClick={()=>{handleFloat()}} className={`${showFooBar?'block':'hidden'}`}>
        <div className='w-2/5 fixed h-80 right-10 bottom-24'>
            <div className='menu-card flex h-1/5 '>
                <div className='left w-2/3 flex justify-center items-center text-sec'>
                    <div className='bubble hover:bg-sec hover:text-prim bg-prim rounded-3xl flex justify-center items-center'><Link href='/'>Home</Link></div>
                </div>
                <div className='right w-1/3  flex justify-center items-center'>
                    <div className='icons p-3 bg-prim'>
                        <Link href='/'><img src='./icons/home.svg'/></Link>
                    </div>
                </div>
            </div>
            <div className='menu-card flex h-1/5 '>
                <div className='left w-2/3 flex justify-center items-center text-sec'>
                    <div className='bubble hover:bg-sec hover:text-prim bg-prim rounded-3xl flex justify-center items-center'><Link href='/services'>Services</Link></div>
                </div>
                <div className='right w-1/3  flex justify-center items-center'>
                    <div className='icons  p-3 bg-prim'>
                        <Link href='/services'><img src='./icons/services.svg'/></Link>
                    </div>
                </div>
            </div>
            <div className='menu-card flex h-1/5 '>
                <div className='left w-2/3 flex justify-center items-center text-sec'>
                    <div className='bubble hover:bg-sec hover:text-prim bg-prim rounded-3xl flex justify-center items-center'><Link href='/about'>About</Link></div>
                </div>
                <div className='right w-1/3  flex justify-center items-center'>
                    <div className='icons p-3 bg-prim'>
                        <Link href='/about'><img src='./icons/about.svg'/></Link>
                    </div>
                </div>
            </div>
            <div className='menu-card flex h-1/5 '>
                <div className='left w-2/3 flex justify-center items-center text-sec'>
                    <div className='bubble hover:bg-sec hover:text-prim bg-prim rounded-3xl flex justify-center items-center'><Link href='/contact'>Contacts</Link></div>
                </div>
                <div className='right w-1/3  flex justify-center items-center'>
                    <div className='icons  p-3 bg-prim'>
                        <Link href='/contact'><img src='./icons/contact.svg'/></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id='Float-bar' className={`!w-[50px] !h-[50px] right-10 ${showFooBar?'bottom-[58%]':'bottom-36'} md:bottom-14 shadow-lg bg-hglt flex justify-center items-center cursor-pointer`}>
            <a href='https://instagram.com/theperfectpen_?igshid=ZDc4ODBmNjlmNQ==' target='_blank'><img src='./icons/insta.webp'/></a>
    </div>
    <div id='Float-bar' className='md:hidden hover:bg-sec hover:text-prim p-3 active:bg-none right-10 bottom-14 shadow-lg bg-hglt flex justify-center items-center cursor-pointer' onClick={()=>{handleFloat()}}>
        {
            (!showFooBar)?<img src='./icons/menu.svg'/>:<img src='./icons/cross.svg'/>
        }
    </div>
    </>
  )
}

export default FloatingBar