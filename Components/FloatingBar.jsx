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
        <div className='w-2/5 fixed h-80 right-10 bottom-36'>
            <div className='menu-card flex h-1/5 '>
                <div className='left w-2/3 flex justify-center items-center text-sec'>
                    <div className='bubble bg-prim rounded-3xl flex justify-center items-center'><Link href='/'>Home</Link></div>
                </div>
                <div className='right w-1/3  flex justify-center items-center'>
                    <div className='icons bg-prim'>
                        <Link href='/'></Link>
                    </div>
                </div>
            </div>
            <div className='menu-card flex h-1/5 '>
                <div className='left w-2/3 flex justify-center items-center text-sec'>
                    <div className='bubble bg-prim rounded-3xl flex justify-center items-center'><Link href='/services'>Services</Link></div>
                </div>
                <div className='right w-1/3  flex justify-center items-center'>
                    <div className='icons bg-prim'>
                        <Link href='/services'></Link>
                    </div>
                </div>
            </div>
            <div className='menu-card flex h-1/5 '>
                <div className='left w-2/3 flex justify-center items-center text-sec'>
                    <div className='bubble bg-prim rounded-3xl flex justify-center items-center'><Link href='/about'>About</Link></div>
                </div>
                <div className='right w-1/3  flex justify-center items-center'>
                    <div className='icons bg-prim'>
                        <Link href='/about'></Link>
                    </div>
                </div>
            </div>
            <div className='menu-card flex h-1/5 '>
                <div className='left w-2/3 flex justify-center items-center text-sec'>
                    <div className='bubble bg-prim rounded-3xl flex justify-center items-center'><Link href='/contact'>Contacts</Link></div>
                </div>
                <div className='right w-1/3  flex justify-center items-center'>
                    <div className='icons bg-prim'>
                        <Link href='/contact'></Link>
                    </div>
                </div>
            </div>
            <div className='menu-card flex h-1/5 '>
                <div className='left w-2/3 flex justify-center items-center text-sec'>
                    <div className='bubble bg-prim rounded-3xl flex justify-center items-center'><Link href='/admin'>Admin</Link></div>
                </div>
                <div className='right w-1/3  flex justify-center items-center'>
                    <div className='icons bg-prim'>
                        <Link href='/admin'></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id='Float-bar' className='right-10 bottom-14 shadow-lg bg-hglt flex justify-center items-center cursor-pointer' onClick={()=>{handleFloat()}}>
        {
            (!showFooBar)?'Dot':'Cross'
        }
    </div>
    </>
  )
}

export default FloatingBar