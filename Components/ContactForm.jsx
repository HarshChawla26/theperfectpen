'use client';
import React, { useState } from 'react'
import '@styles/contact_form.css'
import '@styles/contact.css'
import { toast } from "react-toastify";

function ContactForm() {

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
        setform({
          ...form,
          [name]: value,
        });
      };
    

    async function sendClientDetails(e){
        e.preventDefault();

        if(form.name===''||form.email===''||form.phone===''||form.typeofProject===''||form.deadline===''){
          console.log(form)
          alert('Incomplete Info');
          return;
        }

        const emailFormat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
        if(form.email.match(emailFormat)){
          alert("Please enter a valid email")
          return;
        }
        try{
          const res = await fetch(`/api/postEmail`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(form)
          });
    
          const dat = await res.json()
          
          if (res.status >= 400) {
            toast.error("Something went wrong. Try again later...", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            return res.status(400).json({
              error: 'There was an error'
            });
          }
          toast.success("We'll reply back soon. Thank you! ✨", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }catch(e){
          console.log(e)
        }
      }
  return (
    <>
          <h2 className='fon mb-5 mt-2 '>Contact us</h2>
          <form className='contact-form w-[95%] h-full md:w-5/6 md:h-4/5 table table-fixed' method="POST">
          <div className="table-row my-10">
 
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
                placeholder="94xxxxxxxx"
                required
              />
              </div>

          </div>

          <div className="table-row">

              <label htmlFor="typeofProject" className="table-cell">
                Type of project<span> *</span>
              </label>
              <div className='table-cell  input-cell'>
              <select
                id="top"
                name= 'typeofProject'
                placeholder=""
                value={form.typeofProject}
                required
                onChange={handleinputchange}
              >
                <option value={'0'}> </option>
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
            <label htmlFor="desc" className="table-cell desc">
              <span>Description</span>
            </label>
            <div className='table-cell input-cell'>

                <textarea
                    onChange={handleinputchange}
                    type="text"
                    rows='5'
                    cols='100'
                    id="desc"
                    name="desc"
                    value={form.desc}
                    placeholder="Tell me more about this project . . ."
                ></textarea>
            </div>
          </div>
          <button type="submit"  onClick={sendClientDetails} className=" ms-24 md:ms-44 text-sec btn-prim-outline border border-sec rounded-md hover:bg-sec hover:text-prim mb-3">
            Submit
          </button>
        </form>
        </>
  )
}

export default ContactForm