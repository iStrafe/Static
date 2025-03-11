import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import video from '../assets/videos/vidback.mp4';
import profile from '../views/Profile.jsx';

const Login = () => {
  const navigate = useNavigate();

    // State to manage form input values
  const [formData, setFormData] = useState({ email: '', password: '' });

   // Handles input field changes and updates the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };
    
     // Handles form submission
    const handleSubmit = (e) => {
      e.preventDefault();

      // Alert when email and password fields are empty
      if (!formData.email || !formData.password) {
        alert('⚠️ Please enter both email and password.');
        return;
    }
     // Send a login request to the API with email and password
    axios.post('https://localhost:7056/api/Auth/Login', {
        email: formData.email,
        password: formData.password,
      })
      .then(function (response) {
        console.log(response);
        alert('✅ Login successful');
        // Handle success (e.g., store token, navigate)
      })
      .catch(function (error) {
        console.error('Login Error:', error);
        alert(`❌ Login failed: ${error.response?.data?.message || 'Invalid credentials'}`);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <video src={video} autoPlay loop muted className="absolute object-cover w-full h-full brightness-50"></video>

        <div className="absolute w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4" type="email"/>
              <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4" type="password"/>
              <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4" type="submit">
                Login
              </button>
            </form>
              <button onClick={() => navigate('/Register')}className="block px-4 py-2 text-sm font-semibold text-gray-400 hover:text-white">
                Sign-Up
              </button>
        </div>
    </div>
  );
};

export default Login;
