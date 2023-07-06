'use client'
import React, { useState } from 'react'
import '@styles/tos.css'

function Tos({show,setshow}) {
    function handleCross(){
        setshow((v)=>{return !v})
    }
  return (
    <div id='Tos-container' onClick={()=>{handleCross()}} className={`${!show?'hidden':'flex'} justify-center items-center`}>
        <div className='tos-model bg-prim'>
            <div className='flex justify-between gap-10'>
                <div className='mt-5 hidden md:block'></div>
                <h1 className='mt-5 ms-4 text-xl md:text-3xl'>Terms of Services</h1>
                <div className='mt-5 me-5 text-xl md:text-2xl'><button type='button' onClick={()=>{handleCross()}}>X</button></div>
            </div>
            <div className='model-content mt-0 overflow-scroll md:overflow-auto'>
                
            <p className='text-xs md:text-base'>
            To provide true, accurate, current and complete information about yourself as prompted by The Perfect Pen registration form or guest details form .<br/>
If you provide any information that is untrue, inaccurate, incomplete, or not current or if The Perfect Pen has reasonable grounds to suspect that such information is untrue, inaccurate, and not current or not in accordance with the User Agreement, The Perfect Pen has the right to terminate your refuse to provide you with access to the Website/app/chatbot.<br/>
That in the event that a non- delivery occurs on account of a mistake by you (i.e. wrong name or address or any other wrong information) any extra cost incurred by The Perfect Pen for redelivery shall be claimed from you and you shall pay such cost.<br/>
That you are accessing the services available on this Website/app/chatbot and transacting at your sole risk and are using your best and prudent judgment before entering into any transaction through this Website/app/chatbot.<br/>
By placing an order for a product you agree to be bound by the conditions of sale and invitation of offer included in the item's description.
            </p>
            </div>
        </div>
    </div>
  )
}

export default Tos