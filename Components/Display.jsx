import React from 'react'
import '@styles/display.css';
import Link from 'next/link';
function Display() {
  return (
    <section className='flex flex-col-reverse display-container md:flex-row justify-start  items-start'>
      <div className='w-full h-1/2 md:w-1/2 display-content flex justify-center items-center'>
        <div>
          <p className='w-80 mt-10 text-lg md:text-base text-center'>Discover our range of personalized services that breathe life into cherished moments.</p>
          <Link href='/services' className='btn-prim-outline mt-5 m-auto md:m-0 border border-sec rounded-md hover:bg-sec hover:text-prim'>View services</Link>
        </div>
      </div>
    
      <div className='w-full h-1/2 display-box relative flex flex-wrap md:w-1/2 md:h-full'>
      <div className="wrappers">
      <div id="frame-card-1" className="frame-cards ">
        <div className="skel-div">
          <div className="hanger-lines"></div>
          <div className="hanger-lines2"></div>
          <div className=" photo-frame">
            <div>
              <img src="./images/display1.jpg"/>
            </div>
          </div>
        </div>
      </div>
      <div id="frame-card-2" className="frame-cards ">
        <div className="skel-div">
          <div className="hanger-lines"></div>
          <div className="hanger-lines2"></div>
          <div className=" photo-frame border-sec">
            <div>
              <img src="./images/display2.jpg"/>
            </div>
          </div>
        </div>
      </div>
      <div id="frame-card-3" className="frame-cards ">
        <div className="skel-div">
          <div className="hanger-lines"></div>
          <div className="hanger-lines2"></div>
          <div className=" photo-frame">
            <div>
              <img src="./images/display3.jpg"/>
            </div>
          </div>
        </div>
      </div>
      </div>
        {/* <img className='absolute top-2/4 right-2/3' src='./images/display2.jpg'></img>
        <img className='absolute right-1/3 top-1/4' src='./images/display3.jpg'></img>
        <img className='absolute top-2 left-5' src='./images/display4.jpg'></img> */}
      </div>
    </section>
  )
}

export default Display