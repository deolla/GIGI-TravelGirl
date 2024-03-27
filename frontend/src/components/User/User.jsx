import React from 'react'
import { useState } from 'react';


  const handlePasswordChange = () => {
    // password change functionality
    setUser({
      ...user,
      password: 'XXXXXXXXXXX',
      passwordConfirm: 'XXXXXXXXXXX',
      passwordChanged: true,
      passwordReset: true,
      console.log('Changing password...');

  })
  };

  const handleLogout = () => {
    //logout functionality
    setUser(null);
    localStorage.removeItem('user');
    window.location.reload();
    console.log('Logging out...');
  };

  
function User() {
    const [user, setUser] = useState({
        name: 'Trevor Job',
        email: 'trevor@gmail.com',
        phoneNumber: '+234808764',
        recentTrips: ['Trip 1', 'Trip 2', 'Trip 3'], 
      });
  return (
    <div className="max-w-xl mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <div className="text-center">
        <img
          className="w-32 h-32 mx-auto rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h2 className="mt-4 text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.phoneNumber}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Recent Trips</h3>
        <ul className="mt-2">
          {user.recentTrips.map((trip, index) => (
            <li key={index} className="text-gray-700">{trip}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full mr-4"
          onClick={handlePasswordChange}
        >
          Change Password
        </button>
        <button
          className="bg-primary hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
  
}

export default User