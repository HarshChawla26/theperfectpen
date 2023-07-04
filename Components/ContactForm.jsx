'use client';
import React, { useState } from 'react'
import '@styles/contact_form.css'

function ContactForm() {
    const uri = `${process.env.REACT_APP_API_URL}`

    const [form, setform] = useState({
        name: '',
        email:'',
        phone:'',
        typeofProject:'',
        deadline:'',
        desc:''
    })

    const handleinputchange = (e) => {
        const { name, value } = e.target;
        console.log(`${name} : ${value}`)
        setform({
          ...form,
          [name]: value,
        });
      };
    

    async function sendClientDetails(e){
        e.preventDefault();
        
        console.log(form);

        // const emailFormat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
        // if(formData.email.match(emailFormat)){
        //   alert("Please enter a valid email")
        //   return;
        // }
        // try{
        //   const res = await fetch(`${uri}/feedbacks`,{
        //     method:'POST',
        //     headers:{
        //       'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(formData)
        //   });
    
        //   const dat = await res.json()
          
    
        // }catch(e){
        //   console.log(e)
        //   displayResponse("Something went wrong...Try again later..🧡🌺💛");
        // }
      }


    
  return (
    <>
          <span className='text-4xl mt-5 mb-7'>Contact us</span>
          <form className='contact-form md:w-5/6 md:h-4/5 table table-fixed' method="POST">
          <div className="table-row">
 
            <label htmlFor="name" className='table-cell'>
              Your name<span> *</span>
            </label>

            <div className='table-cell  input-cell'>
                <input onChange={handleinputchange} 
                    type="text"
                    id="name"
                    name= 'name'
                    value={form.name}
                    placeholder="Your Full Name"
                    required
                />
            </div>
 
          </div>


          <div className="table-row">

              <label htmlFor="email" className="table-cell">
                Your email<span> *</span>
              </label>

              <div className='table-cell  input-cell'>
                
              <input onChange={handleinputchange}
                type="email"
                id="email"
                name= 'email'
                value={form.email}
                aria-describedby="emailHelp"
                placeholder="example@gmail.com"
                required
                />
                </div>

          </div>

          <div className="table-row">

              <label htmlFor="phone" className="table-cell">
                Phone No.<span> *</span>
              </label>
              <div className='table-cell  input-cell'>
              <input onChange={handleinputchange}
                type="text"
                id="phone"
                value={form.phone}
                name= 'phone'
                placeholder=""
                required
              />
              </div>

          </div>

          <div className="table-row">

              <label htmlFor="email" className="table-cell">
                Type of project<span> *</span>
              </label>
              <div className='table-cell  input-cell'>
              <select
                id="email"
                name= 'typeofProject'
                placeholder=""
                value={form.typeofProject}
                required
                onChange={handleinputchange}
                defaultValue={'0'}
              >
                <option value='0'>  </option>
                <option value=' Handwritten letters'             >Handwritten letters</option>
                <option value=' Envelope addressing'             >Envelope addressing</option>
                <option value=' Placecards and tags'             >Placecards and tags</option>
                <option value=' Commissioned frame work'         >Commissioned frame work</option>
                <option value=' Signages for events'             >Signages for events</option>
                <option value=' On-site activation'              >On-site activation</option>
                <option value=' Custom engraving'                >Custom engraving</option>
                <option value=' Learn hand engraving'            >Learn hand engraving</option>
                <option value=' Learn copperplate calligraphy'   >Learn copperplate calligraphy</option>
              </select>
              </div>
          </div>

          <div className="table-row">

              <label htmlFor="date" className="table-cell">
                When is Deadline or event date
              </label>
              <div className='table-cell  input-cell'>

              <input onChange={handleinputchange}
                type="date"
                id="date"
                value={form.date}
                name= 'deadline'
                placeholder=""
              />
                </div>

          </div>

          <div className="table-row">
            <label htmlFor="msg" className="table-cell desc">
              <span>Description</span>
            </label>
            <div className='table-cell input-cell'>

                <textarea
                    onChange={handleinputchange}
                    type="text"
                    rows='5'
                    cols='100'
                    id="msg3"
                    name="desc"
                    value={form.desc}
                    placeholder="Tell me more about this project . . ."
                ></textarea>
            </div>
          </div>
        </form>
          <button type="submit"  onClick={sendClientDetails} className=" text-sec btn-prim-outline border border-sec rounded-md hover:bg-sec hover:text-prim mb-3">
            Submit
          </button>
        </>
  )
}

export default ContactForm