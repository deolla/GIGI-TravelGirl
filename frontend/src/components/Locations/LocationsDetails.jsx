import { IoLocationSharp } from 'react-icons/io5';
import axios from 'axios';
import { useEffect, useState } from 'react';

function LocationsDetails({locationId}) {
  // localStorage.removeItem('current_location')  // Placeholder
  // const locationDetails = {
  //   title: 'Mock Location Title',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis nec dictum nunc. Donec viverra ferme',
  // };
  const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis nec dictum nunc. Donec viverra ferme'

  // Function to handle booking action
  const [place, setPlace] = useState({})
  useEffect(() => { 
    axios.get('http://localhost:5000/location/' + locationId, { headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
        }}).then(response => {
          if (response.status === 200) {
            localStorage.setItem('current_location', JSON.stringify({name: response.data.name, location: response.data.address_obj.city, url: response.data.web_url}))
           
            const locationDetails = JSON.parse(localStorage.getItem('current_location'))
            setPlace(locationDetails)
          }
        }).catch(err => {
          console.log(err);
        })
    })
    const handleRedirect = (url) => {
      window.open(url, '_blank');
    };
      // const locationDetails = JSON.parse(localStorage.getItem('current_location'))
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{JSON.parse(localStorage.getItem('current_location')).name}</h1>
        <div className='flex items-center gap-2 opacity-70'>
          <IoLocationSharp />
          <span>{JSON.parse(localStorage.getItem('current_location')).location}</span>
        </div>
        <p className="text-lg text-gray-700 mb-6 mt-4">{desc}</p>
        
        <button
          onClick={() => handleRedirect(JSON.parse(localStorage.getItem('current_location')).url)}
          className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded'"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default LocationsDetails;
