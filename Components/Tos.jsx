'use client'
import React, { useState } from 'react'
import '@styles/tos.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTos } from './../store/slice/tosSlice'
function Tos() {

    const show = useSelector(state => state.showtos.value)
    const dispatch = useDispatch()

    function handleCross(){
        dispatch(toggleTos())
    }
  return (
    <div id='Tos-container' onClick={()=>dispatch(toggleTos())} className={`${!show?'hidden':'flex'} justify-center items-center`}>
        <div className='tos-model text-sec bg-prim'>
            <div className='flex  justify-between gap-10'>
                <div className='mt-5 hidden md:block'></div>
                <h1 className='mt-5 ms-4 fon text-xl md:text-3xl'>Terms of Services</h1>
                <div className='mt-5 me-5 text-xl md:text-2xl'><button><img onClick={()=>dispatch(toggleTos())} className='w-10' src='icons/cross.svg'/></button></div>
            </div>
            <div className='model-content mt-0 overflow-scroll md:overflow-auto'>
                
            <p className='text-xs md:text-base text-sec-der'>
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