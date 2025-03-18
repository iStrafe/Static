import React from 'react'
import video from '../assets/videos/vidback.mp4'

const Contact = () => {
  return (
    <div className="bg-slate-900">
      <section className="">
       
          {/* <video src={video} autoPlay loop muted className="absolute object-cover w-auto h-auto brightness-50">
            
          </video> */}

       
          <div className=" top-40 sm:top-10 right-5 left-5 gap-8 items-center mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:p-30 ">
            
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 min-w-min border-2 border-cyan-400 rounded-lg bg-gradient-to-t from-cyan-950 to-black shadow-xl">

                <h1 className="col-span-4 mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Me</h1>
                
                <input className="col-span-4 sm:col-span-2 md:col-span-2 rounded-lg h-8 p-4" type="text" placeholder="First Name" />
                <input className="col-span-4 sm:col-span-2 md:col-span-2 rounded-lg h-8 p-4" type="text" placeholder="Last Name" />
                <input className="col-span-4 sm:col-span-2 rounded-lg h-8 p-4" type="email" placeholder="Email" />
                <input className="col-span-4 sm:col-span-2 rounded-lg h-8 p-4" type="email" placeholder="Mobile Number" />
                <textarea className="col-span-4 sm:col-span-2 md:col-span-4 row-span-10 rounded-xl p-4" placeholder="Description"></textarea>

                <a href="#" className="col-span-4 md:col-span-3 inline-flex items-center text-green-400 hover:text-green-300 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                    Submit
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                
              </div>
    
              <div className="mt-4 md:mt-0 bg-transparent-500">
                <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">I'm Here to Help!</h2>
                <div class="bg-white w-full h-[2px] mb-4"></div>
                <p className="mb-6 font-light text-gray-500 md:text-xl dark:text-gray-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <h3 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Address Details:</h3>
                <p className="mb-2 font-light text-gray-500 md:text-lg dark:text-gray-200" >Oro-A San Andress Manila</p>
                <p className="mb-2 font-light text-gray-500 md:text-lg dark:text-gray-200">+63 9270130174</p>
                <p className="mb-2 font-light text-gray-500 md:text-lg dark:text-gray-200">Yugotabata@gmail.com</p>
                
              </div>

          </div>
      </section>

    </div>
  )
}

export default Contact