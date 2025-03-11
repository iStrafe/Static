import React from 'react'
import video from '../assets/videos/vidback.mp4'


const Service = () => {
  return (
    <div className="max-w screen-2xl mx-auto bg-slate-900">

         {/* <video src={video} autoPlay loop muted className="absolute object-cover w-auto h-auto brightness-50"></video> */}
         
      <section className="object-cover w-full h-full">
          <h1 className="text-4xl font-bold font-sans text-center gap p-5">
            <span className="text-pink-600">-</span>
            <span className="text-pink-600">MY</span> <span className="text-cyan-300">SERVICES</span>
            <span className="text-cyan-300">-</span>
            <p className="font-sans text-sm text-gray-300 p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <p className="font-sans text-sm text-gray-200">Standard dummy text ever since the 1500s</p>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      
              <div className="col-span-3 md:col-span-1 relative drop-shadow-xl min-w-48 min-h-64 overflow-hidden bg-gradient-to-t from-gray-200 to-cyan-300 rounded-3xl hover:bg-opacity-30 hover:backdrop-blur-lg transition duration-300 hover:bg-cyan-500 hover:text-indigo-800 hover:drop-shadow-[0_10px_15px_rgba(75,0,130,0.3)]">
                  <div className="text-4xl font-sans font-semibold absolute flex items-center justify-center text-black z-[1] opacity-90 rounded-xl inset-0.5 bg-white hover:bg-transparent hover:text-gray-800 transition duration-300">
                    <svg className="w-20 h-20 text-gray-800 dark:text-gray-800 hover:text-gray-800 transition duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602ZM12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a7.75 7.75 0 0 1-.745.387c-.193.088-.394.173-.6.253-.063.024-.124.05-.189.073a18.934 18.934 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.073a10.143 10.143 0 0 1-.852-.373 7.75 7.75 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22Zm7.09-13.928a9.91 9.91 0 0 1-.6.253c-.063.025-.124.05-.189.074a18.935 18.935 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.074a10.163 10.163 0 0 1-.852-.372 7.816 7.816 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a7.816 7.816 0 0 1-.745.386Z"/>
                    </svg>

                    <p className="">Database Design</p>
                  </div>
              </div>

              <div className="col-span-3 md:col-span-1 relative drop-shadow-xl min-w-48 min-h-64 overflow-hidden bg-gradient-to-t from-gray-200 to-cyan-400 rounded-3xl hover:bg-opacity-30 hover:backdrop-blur-lg transition duration-300">
                  <div className="text-4xl font-sans font-semibold absolute flex items-center justify-center text-black z-[1] opacity-90 rounded-xl inset-0.5 bg-white hover:bg-transparent hover:text-gray-800 transition duration-300">
                    <svg className="w-20 h-20 text-gray-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                    </svg>

                    <p className="">Web Development</p>
                  </div>
              </div>

              <div className="col-span-3 md:col-span-1 relative drop-shadow-xl min-w-48 min-h-64 overflow-hidden bg-gradient-to-t from-gray-200 to-cyan-500 rounded-3xl hover:bg-opacity-30 hover:backdrop-blur-lg transition duration-300">
                  <div className="text-4xl font-sans font-semibold absolute flex items-center justify-center text-black z-[1] opacity-90 rounded-xl inset-0.5 bg-white hover:bg-transparent hover:text-gray-800 transition duration-300">
                    <svg className="w-20 h-20 text-gray-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                    </svg>

                    <p className="">Mobile Development</p>
                  </div>
              </div>

              <div className="col-span-3 md:col-span-1 relative drop-shadow-xl min-w-48 min-h-64 overflow-hidden bg-gradient-to-t from-gray-200 to-pink-300 rounded-3xl hover:bg-opacity-30 hover:backdrop-blur-lg transition duration-300">
                  <div className="text-4xl font-sans font-semibold absolute flex items-center justify-center text-black z-[1] opacity-90 rounded-xl inset-0.5 bg-white hover:bg-transparent hover:text-gray-800 transition duration-300">
                    <svg className="w-20 h-20 text-gray-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 9 3 3-3 3m5 0h3M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                    </svg>

                      <p className="">Troubleshooting</p>
                  </div>
              </div>

              <div className="col-span-3 md:col-span-1 relative drop-shadow-xl min-w-48 min-h-64 overflow-hidden bg-gradient-to-t from-gray-200 to-pink-400 rounded-3xl hover:bg-opacity-30 hover:backdrop-blur-lg transition duration-300">
                  <div className="text-4xl font-sans font-semibold absolute flex items-center justify-center text-black z-[1] opacity-90 rounded-xl inset-0.5 bg-white hover:bg-transparent hover:text-gray-800 transition duration-300">
                    <svg className="w-20 h-20 text-gray-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M5 5a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H5Zm9 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H14Zm3 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17ZM3 17v-3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm11-2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H14Zm3 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/>
                    </svg>

                    <p className="">Software Development</p>
                  </div>
              </div>

              <div className="col-span-3 md:col-span-1 relative drop-shadow-xl min-w-48 min-h-64 overflow-hidden bg-gradient-to-t from-gray-200 to-pink-500 rounded-3xl hover:bg-opacity-30 hover:backdrop-blur-lg transition duration-300">
                  <div className="text-4xl font-sans font-semibold absolute flex items-center justify-center text-black z-[1] opacity-90 rounded-xl inset-0.5 bg-white hover:bg-transparent hover:text-gray-800 transition duration-300">
                    <svg className="w-20 h-20 text-gray-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h6M9 3v4a1 1 0 0 1-1 1H4m11 13a11.426 11.426 0 0 1-3.637-3.99A11.139 11.139 0 0 1 10 11.833L15 10l5 1.833a11.137 11.137 0 0 1-1.363 5.176A11.425 11.425 0 0 1 15.001 21Z"/>
                    </svg>

                    <p className="">Network Design</p>
                  </div>
              </div>

          </div>
      </section>
      

    </div>
  )
}

export default Service