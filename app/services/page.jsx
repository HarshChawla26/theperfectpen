import React from 'react'
import '@styles/services.css'
function page() {
  let arr = [
    {
      name:'Handwritten letters',
      img:'./services/hl.jpg',
      desc:"Handwritten letters possess a timeless charm that digital communication often lacks. They are personal, intimate, and hold a unique emotional resonance. The tactile experience of pen meeting paper fosters a deep connection between sender and recipient. Each stroke captures the writer's thoughts, feelings, and personality, creating a cherished keepsake."
    },
    {
      name:'Envelope addressing',
      img:'./services/ea.jpg',
      desc:"Envelope addressing adds a touch of elegance and thoughtfulness to any correspondence. The careful artistry of handwritten names and addresses on envelopes transforms a simple envelope into a captivating first impression. Each stroke of the pen showcases the sender's attention to detail and respect for the recipient. The art of envelope addressing combines calligraphy skills, precision, and creativity, resulting in a visually stunning presentation."
    },
    {
      name:'Placecards and tags',
      img:'./services/pat.jpg',
      desc:"Placecards and tags are small yet impactful details that elevate any event or gathering. These meticulously crafted items serve multiple purposes, including assigning seats, guiding attendees, and adding a personal touch to each guest's experience. Whether handwritten or creatively designed, placecards and tags offer a sense of organization and elegance. They can feature names, or even personalized messages, creating a warm and welcoming ambiance."
    },
    {
      name:'Commisioned frome work',
      img:'./services/cfw.jpg',
      desc:'Commissioned artwork offers a unique opportunity to acquire personalized and bespoke pieces that reflect individual preferences and tastes. By collaborating directly with an artist, clients can express their vision and have it translated into a one-of-a-kind framed creation. Commissioned artwork adds a distinctive touch to any space, capturing emotions, memories, or capturing specific themes.'
    },
    {
      name:'Signages for events',
      img:'./services/sfe.jpg',
      desc:"Event signages serve as essential visual aids, guiding attendees seamlessly through the event experience. These eye-catching and informative displays provide clear directions, highlight key areas, and convey important information. From registration to breakout sessions, signages enhance event navigation, ensuring a smooth and memorable journey for all participants."
    },
    {
      name:'On-site activation',
      img:'./services/osa.jpg',
      desc:"On-site activation brings events to life by creating immersive and engaging experiences for attendees. Through interactive displays, demonstrations, and hands-on activities, on-site activation captures attention, sparks curiosity, and fosters meaningful connections. These activations serve as powerful marketing tools, leaving a lasting impact and generating buzz around the event or brand."
    },
    {
      name:'Custom engraving',
      img:'./services/ce.jpg',
      desc:"Custom engraving adds a personal and meaningful touch to various items, turning them into treasured keepsakes. With meticulous craftsmanship and attention to detail, engraved pieces become timeless expressions of individuality and sentiment. From jewelry to awards, custom engraving transforms ordinary objects into unique and cherished mementos that celebrate special moments and relationships."
    },
    {
      name:'Learn hand engraving',
      img:'./services/lhe.jpg',
      desc:"Learning hand engraving is a captivating journey that combines artistry and craftsmanship. Through dedicated practice and guidance, you can master the delicate skill of etching intricate designs onto various surfaces. Hand engraving allows you to create personalized jewelry, embellish metalwork, and bring life to heirlooms. Discover the joy of shaping metal with precision, unlocking endless possibilities for self-expression and creating timeless pieces of art."
    },
    {
      name:'Learn copperplate calligraphy',
      img:'./services/lcc.jpg',
      desc:"Embark on a captivating journey of mastering copperplate calligraphy, an elegant and classic script. Through dedicated practice and guidance, you can learn the art of crafting graceful letterforms and flourishing strokes. Copperplate calligraphy offers a timeless appeal, perfect for formal invitations, certificates, and artistic compositions. Delve into the world of delicate penmanship, refine your technique, and unlock the beauty of this exquisite writing style."
    }
  ]


  return (
    <div className='services-container bg-prim flex justify-center items-center'>
      <div className='services-box mt-[20%] md:mt-20 flex flex-col justify-center items-center'>
        
       {
        arr.map((service)=>{
          return (
            <div key={`${service.name}`} className='bg-hglt w-[90%] md:min-h-[200px] md:w-[65%] flex m-5 flex-col md:flex-row md:odd:flex-row-reverse'>
                
                <div className='services-left  w-full md:w-2/5 flex bg-sec justify-center items-center '>
                  <div className='w-[90%] md:w-auto md:h-[90%]'>
                    <img className='w-full h-full max-h-[400px]' src={service.img}></img>
                  </div>
                </div>
                
                <div className='services-right md:h-full w-full md:w-3/5  flex flex-col items-center'>
                  <div className=' flex flex-col justify-center gap-7 mt-5 items-center'>
                    <h1 className='h1-font text-sec text-3xl'>{service.name}</h1>
                    <p className='text-justify font-serif text-sec'>{service.desc}<br/><br/></p>
                  </div>
                </div>
            </div>
          )
        })
       } 
      </div>
    </div>
  )
}

export default page