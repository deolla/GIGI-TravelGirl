import { useState, useEffect } from 'react';
import LogoutFunc from '../Authentication/Logout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


  
function User() {
    const [user, setUser] = useState({
      // username: '',
      // useremail: '',
      phoneNumber: '+234808764',
      flights: [], 
    });

    const handlePasswordChange = () => {
      // password change functionality
      setUser({
        ...user,
        password: 'XXXXXXXXXXX',
        passwordConfirm: 'XXXXXXXXXXX',
        passwordChanged: true,
        passwordReset: true,
  
    })
    };
    const Token = localStorage.getItem('jwtToken');
    // console.log(Token)
    useEffect(() => {

      axios.get('http://localhost:5000/current', {  headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${Token}`
      }}).then(response => {
        
        // email = response.data.email
        // name = response.data.username
        setUser({...user,username: response.data.username, useremail: response.data.email, flights: response.data.flights})
      }).catch(err => console.log(err));
    })
    const navigation = useNavigate()
  return (
    <div className="max-w-xl mx-auto mt-20 p-8 bg-white shadow-md rounded-lg">
      <div className="text-center">
        <img
          className="w-32 h-32 mx-auto rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h2 className="mt-4 text-xl font-bold">{user.username}</h2>
        <p className="text-gray-600">{user.useremail}</p>
        <p className="text-gray-600">{user.phoneNumber}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Recent Trips</h3>
        <ul className="mt-2">
          {user.flights.map((trip, index) => (
            <li key={index} className="text-gray-700">{`from ${trip.from} to ${trip.to} on ${trip.departureTime.split('T')[0]}`}</li>
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
          onClick={() => LogoutFunc(navigation)}
        >
          Logout
        </button>
      </div>
    </div>
  );
  
}

export default User