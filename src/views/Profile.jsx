import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    description: ''
  });

  useEffect(() => {
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
                setUserData(response.data); // Assuming setUserData updates state
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
                  <div className="col-span-2 bg-gray-800 text-white p-4 rounded-3xl shadow-md max-w-md">
                    <h3 className="text-lg font-semibold">{userData.firstName} {userData.middleName} {userData.lastName}</h3>
                    <p>Email: {userData.email}</p>
                    <div className="bg-gray-900">
                      {userData.image && <img src={`https://localhost:7056/${userData.image}`} alt="Profile" onError={(e) => e.target.src = "/default-profile.png"}/>}
                    </div>
                    <p className="mt-2">Description: {userData.description}</p>
                  </div>
                ) : (
                  <p>Loading profile...</p>
                )}

                <div className="col-span-3 bg-gray-800 text-white p-4 rounded-3xl shadow-md">
                  <h1 className="font-bold text-3xl gap p-5">
                  <span className="text-gray-400">EDIT</span> <span className="text-gray-300">PROFILE</span></h1>
                  <div className="grid grid-cols-3">
                    
                  </div>
                </div>
          </div>
      </div> 

    </div>
  );
};

export default Profile;
