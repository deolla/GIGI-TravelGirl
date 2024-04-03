/* eslint-disable react/jsx-key */
import { IoLocationSharp,  IoStarSharp, IoWifiSharp } from 'react-icons/io5';
import { FaKitchenSet } from 'react-icons/fa6';
import { TbAirConditioning } from 'react-icons/tb';
import { FaCarAlt, FaFire, FaSwimmingPool } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import getLocation from '../helpers/currentLocation';
import  getLocalLocation from '../helpers/localLocation';
import kw from '../../assets/nigeria/kwara.jpg'
import bookHotel from '../helpers/bookHotel';

function LocationsDetails({locationId, navigation}) {
  // localStorage.removeItem('current_location')  // Placeholder
  // const locationDetails = {
  //   title: 'Mock Location Title',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis nec dictum nunc. Donec viverra ferme',
  // };

  // Function to handle booking action
  const [place, setPlace] = useState({})
  // let locationDetails
  
  // useEffect(() => { 
  //   axios.get('http://localhost:5000/location/' + locationId, { headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //       }}).then(response => {
  //         if (response.status === 200) {
  //           localStorage.setItem('current_location', JSON.stringify({name: response.data.name, location: response.data.address_obj.city, url: response.data.web_url}))
           
  //           locationDetails = JSON.parse(localStorage.getItem('current_location'))
  //           setPlace(locationDetails)
  //         }
  //       }).catch(err => {
  //         console.log(err);
  //       })
  //   },[locationId, locationDetails])
  // const locationDetails = getLocation(locationId)

    const handleRedirect = (url) => {
      window.open(url, '_blank');
    };
      // const locationDetails = JSON.parse(localStorage.getItem('current_location'))
    const curLoc = getLocalLocation(locationId);
    const {images, city, address, previewAmenities,hostThumbnail, price, rating,reviewsCount, name} = curLoc
    const icons = {
      'Heating': FaFire, 
      'Wifi': IoWifiSharp, 
      "Air conditioning": TbAirConditioning, 
      'Free parking': FaCarAlt,
      'Pool': FaSwimmingPool
    }
    const GetIcon = (iconT) =>{
      switch (iconT) {
        case 'Heating':
          console(iconT)
          return FaFire

        case 'Wifi':
          console(iconT)
          return IoWifiSharp

        case 'Air conditioning':
          console(iconT)
          return TbAirConditioning

        case 'Free parking':
          console(iconT)
          return TbAirConditioning

        case 'Pool':
          console(iconT)
          return TbAirConditioning
            
        
        default:
          return false;
      }
    }
      const [checkinDate, setCheckinDate] = useState('');
      const [checkoutDate, setCheckoutDate] = useState('');
    
      const handleCheckinChange = (e) => {
        setCheckinDate(e.target.value);
      };
    
      const handleCheckoutChange = (e) => {
        setCheckoutDate(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        try{
          bookHotel({checkinDate,checkoutDate, totalPrice: price.total, placeName: name})
          navigation('/')
        }
        catch{
          console.error('error Booking app')
        }
        // Add your booking submission logic here
      };


    return (
      <div className="container mx-auto mt-32 py-8">

        <div className='grid md:grid-cols-4 gap-4'>
        <img className='w-full h-full md:max-h-96 object-cover md:col-span-2 md:row-span-2' src={images[4]} alt="" />
        <img className='w-full max-h-44 object-cover hidden md:inline-block' src={images[0]} alt="" />
        <img className='w-full max-h-44 object-cover hidden md:inline-block' src={images[1]} alt="" />
        <img className='w-full max-h-44 object-cover hidden md:inline-block' src={images[2]} alt="" />
        <img className='w-full max-h-44 object-cover hidden md:inline-block' src={images[3]} alt="" />
        {/* <img className='w-full max-h-36 object-cover col-span-2' src={kw} alt="" /> */}
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <div className='flex items-center gap-2 opacity-70'>
            <IoLocationSharp />
            <span>{address}</span>
          </div>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='p-10'>
              <h2 className='text-3xl font-bold mb-4'>What We Offer</h2>
              {previewAmenities.map((amenity) => {
                return <div className='flex mx-2 my-4 items-center gap-2 opacity-70'>
                          {/* {icons[amenity]} */}
                          {/* {<GetIcon iconT={amenity}/>} */}
                          <span className='text-base'>{amenity}</span>
                       </div>                
              })}
              <div className=" mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="checkin" className=" text-gray-700 mb-2 mr-2">Check-In</label>
                    <input type="date" id="checkin" className="form-input px-4 py-2 ring-2 focus:outline-none rounded border-blue-600" value={checkinDate} onChange={handleCheckinChange} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="checkout" className="text-gray-700 mb-2 mr-2">Check-Out</label>
                    <input type="date" id="checkout" className="form-input px-4 py-2 ring-2 focus:outline-none rounded border-blue-600" value={checkoutDate} onChange={handleCheckoutChange} required />
                  </div>

                  <button
                    type='submit'
                    className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded'"
                    >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
            <div className=" transition-all duration-500 hover:shadow-xl shadow-lg cursor-pointer p-10 rounded-2xl ">
              <h2 className='text-3xl font-bold mb-4'>Meet The Host</h2>
              <div className='overflow-hidden flex flex-col p-4 place-items-center'>
                <img src={hostThumbnail}
                alt='places for vacation'
                className='object-cover rounded-full h-[220px] mx-auto hover:scale-110 hover:skew-x-2 transition duration-700'
                />
                <h2 className='text-2xl mt-2'>Mark James</h2>
              </div>

              <div className='p-2 space-y-2 divide-y '>
                <div className='flex items-center gap-2 opacity-70'>
                <span className='text-base'>{'reviews'}</span>
                <span className='text-xl'>{reviewsCount}</span>
                </div>
                <div className='flex items-center gap-2 opacity-70'>
                  <span className='text-base'>{'ratings'}</span>
                  <span className='text-xl'>{rating}</span>
                </div>
              </div>     
            </div>        
          </div>
        </div>
      </div>
    );
}

export default LocationsDetails;
