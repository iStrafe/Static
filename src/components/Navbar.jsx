import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/Automaton.png'


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-950 hover:bg-gradient-to-tr from-slate-900 to-indigo-900 ...">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white ">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-red-300">Reginald Unisa</span>
        </a>
        
        <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
                <button onClick={() => navigate('/home')} className="block px-4 py-2 text-sm font-semibold text-white dark:text-gray-200 hover:text-pink-500">Home</button>
            </li>
            <li>
              <button onClick={() => navigate('/about')} className="block px-4 py-2 text-sm font-semibold text-white dark:text-gray-200 hover:text-cyan-500">About</button>
            </li>
            <li>
              <button onClick={() => navigate('/service')} className="block px-4 py-2 text-sm font-semibold text-white dark:text-gray-200 hover:text-pink-500">Service</button>
            </li>
            <li>
              <button onClick={() => navigate('/contact')} className="block px-4 py-2 text-sm font-semibold text-white dark:text-gray-200 hover:text-cyan-500">Contact</button>
            </li>
            <li>
              <button onClick={() => navigate('/Register')} className="block px-4 py-2 text-sm font-semibold text-green-400 dark:text-green-400 hover:text-yellow-300">Sign-Up</button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar