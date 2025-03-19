import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    description: '',
   // image: null,
    type: 1 // Default value for Type
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

    // Validate required fields
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      alert('First Name, Last Name, and Email are required.');
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Create a FormData object
    const formDataToSend = new FormData();
    formDataToSend.append('FirstName', formData.firstName);
    formDataToSend.append('MiddleName', formData.middleName);
    formDataToSend.append('LastName', formData.lastName);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('Description', formData.description);
    formDataToSend.append('Type', formData.type);
    // if (formData.Image) {
    //   formDataToSend.append('Image', formData.Image);
    // }

    // Log the FormData for debugging
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    // Proceed with the API request
      try {
        const token = sessionStorage.getItem('authToken');
        const response = await axios.put(
          'https://localhost:7056/api/User',
          formDataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data' // Set the content type
            }
          }
        );

        alert('✅ Profile updated successfully!');
      } 
      catch (error) {
        if (error.response) {
          console.error("Full API Error Response:", error.response.data);
          if (error.response.data.errors) {
            Object.entries(error.response.data.errors).forEach(([field, messages]) => {
              console.error(`Validation error for ${field}:`, messages.join(', '));
            });
          }
          alert('Validation errors occurred. Please check the fields and try again.');
        } 
        else {
          console.error("Request Failed:", error.message);
          alert('Failed to update profile. Please try again.');
        }
      }
  };

    const [userData, setUserData] = useState({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      description: '',
      type: 0 // Default value for Type
    });

  useEffect(() => {  //===========For Displaying User's Profile===============
  const token = sessionStorage.getItem('authToken');

  if (!token) {
    console.error('No stored token found!');
    navigate('/login'); // Redirect to login page if no token
  } else {
    console.log('Stored Token:', token);

    axios.get('https://localhost:7056/api/Auth', {
      headers: {
        Authorization: `Bearer ${token}` // Fix: Use Bearer token
      }
    })
      .then((response) => {
        console.log('Profile Data:', response.data);
        setUserData(response.data); // Update userData state with fetched data

        // Update formData state with fetched data
        setFormData({
          firstName: response.data.firstName || '',
          middleName: response.data.middleName || '',
          lastName: response.data.lastName || '',
          email: response.data.email || '',
          description: response.data.description || '',
          type: response.data.type || 1 // Default value for Type
        });
      })
      .catch((error) => {
        console.error('Error fetching profile:', error.response?.data || error);
        alert('Failed to load profile. Please log in again.');
        navigate('/login');
      });
  }
}, [navigate]);

  return (
    <div className="grid grid-cols-4 h-screen bg-slate-900">
      <div className="col-span-4 place-self-center">
        <div className="grid grid-cols-5 gap-5 py-10">

          <div className="col-span-4">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl gap p-5">
              <span className="text-pink-600">Profile</span> <span className="text-cyan-300">Settings</span>
            </h1>
          </div>

          {userData ? (
            <div className="col-span-5 sm:col-span-2 bg-gray-800 text-white p-4 rounded-3xl shadow-md max-w-80">
              <h3 className="text-lg font-semibold">{userData.firstName} {userData.middleName} {userData.lastName}</h3>
              <p>Email: {userData.email}</p>
              <div className="bg-gray-900">
                {userData.image && <img className="object-scale-down" src={`https://localhost:7056/${userData.image}`} alt="Profile" onError={(e) => e.target.src = "/default-profile.png"} />}
              </div>
              <p className="mt-2">Description: {userData.description}</p>
            </div>
          ) : (
            <p>Loading profile...</p>
          )}

          <div className="col-span-5 sm:col-span-3 text-white p-4 rounded-3xl shadow-md shadow-indigo-500/50">
            <h1 className="font-bold text-3xl gap p-5">
              <span className="text-gray-400">EDIT</span> <span className="text-gray-300">PROFILE</span>
            </h1>
            <div className="bg-gray-700 w-full h-[5px] mb-4"></div>

            <div className="gap-5 shadow-lg">
              <form onSubmit={handleSubmit}>
                  <div className=" p-2 shadow-sm shadow-gray-700/50 rounded-xl">{/**First Name */}
                    <input className="text-gray-400 bg-transparent" name="firstName" type="text" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
                  </div>
                  <div className=" p-2 shadow-sm shadow-gray-700/50 rounded-xl">{/**Middle Name */}
                    <input className="text-gray-400 bg-transparent" name="middleName" type="text" value={formData.middleName} onChange={handleChange} placeholder="Middle Name" />
                  </div>
                  <div className=" p-2 shadow-sm shadow-gray-700/50 rounded-xl">{/**Last Name */}
                    <input className="text-gray-400 bg-transparent" name="lastName" type="text" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
                  </div>
                  <div className=" p-2 shadow-sm shadow-gray-700/50 rounded-xl">{/**Email */}
                    <input className="text-gray-400 bg-transparent" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                  </div>
                  <div className=" p-2 shadow-sm shadow-gray-700/50 rounded-xl">{/**Description */}
                    <textarea className="text-gray-400 bg-transparent" name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
                  </div><br></br>
                  {/* <input type="file"accept="image/*" onChange={handleFileChange} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4"/> */}
                <button className="w-20 p-2 shadow-sm shadow-gray-700/50 rounded-xl bg-indigo-600 hover:bg-indigo-700" type="submit">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;