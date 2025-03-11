import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import video from '../assets/videos/vidback.mp4';

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    FirstName: '',
    MiddleName: '',
    LastName: '',
    Email: '',
    Password: '',
    Image: null,  // File upload
    Type: 1,  // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, Image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.FirstName || !formData.MiddleName || !formData.LastName || !formData.Email || !formData.Password) {
      alert('⚠️ Please fill in all required fields.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('FirstName', formData.FirstName);
    formDataToSend.append('MiddleName', formData.MiddleName);
    formDataToSend.append('LastName', formData.LastName);
    formDataToSend.append('Email', formData.Email);
    formDataToSend.append('Password', formData.Password);
    formDataToSend.append('Type', formData.Type); // Default 1
    if (formData.Image) {
      formDataToSend.append('Image', formData.Image);
    }

    try {
      const { data } = await axios.post('https://localhost:7056/api/User', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(data);
      alert('✅ Registration successful!');
      navigate('/Login');
    } catch (error) {
      console.error('Registration Error:', error);
      alert(`❌ Registration failed: ${error.response?.data?.message || 'Something went wrong'}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
          <video src={video} autoPlay loop muted className="absolute object-cover w-full h-full brightness-50"></video>
      <div className="absolute w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Register</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input name="FirstName" value={formData.FirstName} onChange={handleChange}  placeholder="First Name" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4" type="text"/>
                <input name="MiddleName" value={formData.MiddleName} onChange={handleChange} placeholder="Middle Name" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4" type="text"/>
                <input name="LastName" value={formData.LastName} onChange={handleChange} placeholder="Last Name" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4" type="text"/>
                <input name="Email"value={formData.Email} onChange={handleChange} placeholder="Email" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4" type="email"/>
                <input name="Password" value={formData.Password} onChange={handleChange} placeholder="Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4" type="password"/>
                <input type="file"accept="image/*" onChange={handleFileChange} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4"/>
                <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4"type="submit">
                    Register
                </button>
            </form>
            <button onClick={() => navigate('/Login')} className="block px-4 py-2 text-sm font-semibold text-gray-400 hover:text-white">
                    Already have an account?
            </button>
      </div>
    </div>
  );
};

export default Register;
