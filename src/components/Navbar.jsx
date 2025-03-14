import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/Automaton.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken'); // Remove token from sessionStorage
    setIsLoggedIn(false);
    alert('✅ You have logged out.');
    navigate('/'); // Redirect to login page
  };

  return (
    <nav className="bg-slate-950 hover:bg-gradient-to-tr from-slate-900 to-indigo-900 ...">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white ">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span onClick={() => navigate('/profile')}className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-red-300">Reginald Unisa</span>
        </a>

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
              {isLoggedIn ? (
                <button onClick={handleLogout} className="block px-4 py-2 text-sm font-semibold text-red-400 dark:text-red-400 hover:text-yellow-300">
                  Logout
                </button>
              ) : (
                <button onClick={() => navigate('/Register')} className="block px-4 py-2 text-sm font-semibold text-green-400 dark:text-green-400 hover:text-yellow-300">
                  Sign-Up
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
