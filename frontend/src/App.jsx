import {  Route, Routes, useNavigate  } from 'react-router-dom';
import {useState, useEffect} from 'react'
import AppLayout from './pages/AppLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Locations from './pages/Locations';
import FlightsPage from './pages/FlightBooking';
import FlightDetailsPage from './pages/FlightDetails';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
// import LocationsDetails from './components/Locations/LocationsDetails';
import SearchResult from './pages/SearchResult';
import UserPage from './pages/UserPage';
import LocationDetailsPage from './pages/LocationsDetailsPage';
// import getCurrentUser from './components/helpers/current_user';
// import React from 'react';
// import PageNotFound from './pages/PageNotFound';
// import axios from 'axios';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [Token, setToken] = useState(null);
  useEffect(() => {
    // Check if the user is already logged in (on page refresh)
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      // localStorage.setItem('currentUser',setCurrentUser)
    }
  }, []);
  const navigate = useNavigate()
  
  // console.log(Token)

  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    localStorage.setItem('latitude', latitude)
    localStorage.setItem('longitude', longitude)
  }
  
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
    }
  }



  function getLocation() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getLocation()


  return (
    
    <Routes>
      <Route path="/" element={<AppLayout navigation={navigate}/>}>
          <Route index element={<HomePage />} />
          <Route path="/locations/:id" element={<LocationDetailsPage navigation={navigate} />} />
          <Route path="/searchresult/:place" element={<SearchResult />} />
          <Route path="/locations" element={<Locations navigate={navigate}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/login' element={<LoginPage isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} setToken={setToken} />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path="/flight" element={<FlightsPage navigate={navigate}/>} />
          <Route path="/flight/:id" element={<FlightDetailsPage navigate={navigate}/>} />          
          <Route path="/user" element={<UserPage navigate={navigate} Token={Token}/>} />
          {/* {ProtectedRoute('/flight', <FlightsPage/>)}          */}
          {/* <Route path="*" element={<PageNotFound />} />  */}
      </Route>
    </Routes>
    
  )
}

export default App