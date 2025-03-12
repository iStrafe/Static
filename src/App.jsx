import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './views/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';
import Cards from './components/Cards.jsx';
import About from './views/About.jsx';
import Service from './views/Service.jsx';
import Contact from './views/Contact.jsx';
import New from './views/New.jsx';
import Register from './views/Register.jsx'
import Login from './views/Login.jsx';
import Profile from './views/Profile.jsx';

import axios from 'axios';
import { useEffect, useState } from 'react';
import image from './assets/images/User.png'

const App = () => {


  // const uploadUserData = async (formData) => {
  //       try {
  //             const response = await axios.post('https://localhost:7056/api/User', formData, {
  //                 headers: {
  //                     'Content-Type': 'multipart/form-data'
  //                 }
  //             });

  //             console.log('User data uploaded', response.data);
  //         } catch (error) {
  //             console.error('Error uploading user data:', error.response ? error.response.data : error.message);
  //             }
  //         };

  //       // Convert imported image into a File object (Only works in environments like Node.js, needs adjustment for browser)
  //       const getFileFromUrl = async (url, fileName, mimeType) => {
  //           const response = await fetch(url);
  //           const blob = await response.blob();
  //           return new File([blob], fileName, { type: mimeType });
  //       };

  //       const submitForm = async () => {
  //           const formData = new FormData();
  //           formData.append('FirstName', 'Dawg');
  //           formData.append('MiddleName', 'P');
  //           formData.append('LastName', 'Doggie');
  //           formData.append('Email', 'qwer@gmail.com');
  //           formData.append('Password', 'qwerty');
  //           formData.append('Type', 1); // 1 or 0

  //           // Convert image URL to File object
  //           const file = await getFileFromUrl(image, 'User.png', 'image/png');
  //           formData.append('Image', file);

  //           await uploadUserData(formData);
  //       };

  //       // Call submitForm when needed
  //       submitForm();

  

  return (
     <Router>
        {/* <body className="bg-gray-900"> */}
          <Navbar/>
          
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Service" element={<Service/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/New" element={<New/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Login" element={<Login/>}/>
              
              </Routes>

           <Footer/>
        {/* </body> */}
    </Router>
  )
}

export default App;
