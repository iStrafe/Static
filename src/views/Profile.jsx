import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
      const token = sessionStorage.getItem('authToken');

          if (!token) {
              console.error('No stored token found!');
              alert('You must log in first.');
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
    <div className="grid grid-cols-4 h-screen p-5 gap-5">
      <div className="col-span-2">
        <h2 className="text-3xl font-bold mb-4">Welcome to Your Profile</h2>
        {userData ? (
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md max-w-md">
            <h3 className="text-lg font-semibold">{userData.firstName} {userData.middleName} {userData.lastName}</h3>
            <p>Email: {userData.email}</p>
            {userData.image && <img src={`https://localhost:7056/${userData.image}`} alt="Profile" onError={(e) => e.target.src = "/default-profile.png"}/>}
            <p className="mt-2">Description: {userData.description}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>

      <div className="col-span-2 border-t-black">
         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 min-w-min border-2 border-cyan-400 rounded-lg bg-gradient-to-t from-cyan-950 to-black shadow-xl">

            <h1 className="col-span-4 mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Edit profile</h1>
            
            <input className="col-span-4 sm:col-span-2 md:col-span-2 rounded-lg h-8" type="text" placeholder="First Name" />
            <input className="col-span-4 sm:col-span-2 md:col-span-2 rounded-lg h-8" type="text" placeholder="Last Name" />
            <input className="col-span-4 sm:col-span-3 rounded-lg h-8" type="email" placeholder="Email" />
            <textarea className="col-span-4 sm:col-span-2 md:col-span-4 row-span-10 rounded-xl" placeholder="Description"></textarea>

            <a href="#" className="col-span-4 md:col-span-3 inline-flex items-center text-green-400 hover:text-green-300 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Submit
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
          </div>
      </div>
    </div>
  );
};

export default Profile;
