import React from 'react'
import Picture from "../assets/images/User.png";
import profile from "../assets/images/ProfilePic.jpg";

const About = () => {
    return (
        <div className="bg-black text-white">
                <div className="">
                        <div className="h-30 py-10 bg-gradient-to-r from-gray-900 to-cyan-950">
                                <h1 className="text-4xl font-bold font-sans text-center gap p-2">
                                    <span className="text-pink-600">-</span>
                                    <span className="text-pink-600">ABOUT</span> <span className="text-cyan-300">ME</span>
                                    <span className="text-cyan-300">-</span>
                                </h1>     
                                
                        </div>
                        {/** Profile section*/}
                        <div className="max-w-screen-xl mx-auto p-4">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
                                        <div className="col-span-1 gap-y-2">
                                                <img src={profile} alt="" className="rounded-full"/>
                                                <h1 className="text-2xl font-bold text-cyan-300 py-2 animate-pulse">Reginald "Reg" Unisa</h1>
                                                <h2 className="text-xl font-sans font-bold text-blue-600">Address</h2>
                                                <div class="bg-blue-800 w-full h-[2px] mb-4"></div>
                                                <p className="text-gray-500 dark:text-gray-400">Oro-A San Andress Manila</p>

                                                <h2 className="text-xl font-sans font-bold text-blue-600">Contact</h2>
                                                <div class="bg-blue-800 w-full h-[2px] mb-4"></div>
                                                <p className="text-gray-500 dark:text-gray-400">+63 9270130174</p>
                                                <p className="text-gray-500 dark:text-gray-400">Yugotabata@gmail.com</p>

                                                <h2 className="text-xl font-sans font-bold text-blue-600">Skills</h2>
                                                <div class="bg-blue-800 w-full h-[2px] mb-4"></div>
                                                <div className="grid grid-cols-4">
                                                        <div className="col-span-1">
                                                                <p className="text-gray-500 dark:text-gray-400">C#</p>
                                                        </div>
                                                        <div className="col-span-1">
                                                                <p className="text-gray-500 dark:text-gray-400">PHP</p>
                                                        </div>
                                                        <div className="col-span-1">
                                                                <p className="text-gray-500 dark:text-gray-400">Java</p>
                                                        </div>
                                                        <div className="col-span-1">
                                                                <p className="text-gray-500 dark:text-gray-400">SQL</p>
                                                        </div>
                                                </div>

                                                <h2 className="text-xl font-sans font-bold text-blue-600">Social Media</h2>
                                                <div class="bg-blue-800 w-full h-[2px] mb-4"></div>
                                                 <div className="grid grid-cols-5 h-10">
                                                        <div className="col-span-1">
                                                                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]" href>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                                <path
                                                                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                                        </svg>
                                                                </span>
                                                        </div>

                                                         <div className="col-span-1">
                                                                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                                <path
                                                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                                                        </svg>
                                                                </span>
                                                        </div>

                                                         <div className="col-span-1">
                                                                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                        <path
                                                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                                                </svg>
                                                                </span>
                                                        </div>
                                                </div>

                                                <button type="button" className="bg-gradient-to-t from-blue-600 to-cyan-400 hover:shadow-md hover:shadow-cyan-400/40 rounded-xl h-10 w-20 text-wrap text-center font-sans font-bold text-white">About me </button>
                                        </div>
                                         {/** Description section*/}
                                        <div className="col-span-2">
                                                <h1 className="text-2xl font-bold">WEB DEVELOPER</h1>
                                                <div class="bg-cyan-600 w-full h-[2px] mb-4"></div>
                                                
                                                <p className="text-gray-500 dark:text-gray-400 p-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                <h1 className="text-2xl font-bold">Lorem Ipsum</h1>
                                                <div class="bg-cyan-600 w-full h-[2px] mb-4"></div>
                                                <p className="text-gray-500 dark:text-gray-400 p-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                                                <h1 className="text-2xl font-bold">Lorem Ipsum</h1>
                                                <div class="bg-cyan-600 w-full h-[2px] mb-4"></div>
                                                <p className="text-gray-500 dark:text-gray-400 p-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                        </div>
                                </div>
                        </div>
                </div>

        </div>
    )

}

export default About