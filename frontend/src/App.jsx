import {  Route, Routes, useNavigate  } from 'react-router-dom';
import {useState, useEffect} from 'react'
import AppLayout from './pages/AppLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Locations from './pages/Locations';
import FlightsPage from './pages/FlightBooking';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LocationsDetails from './components/Locations/LocationsDetails';
import SearchResult from './pages/SearchResult';
import UserPage from './pages/UserPage';
// import React from 'react';
// import PageNotFound from './pages/PageNotFound';



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



  return (
    
    <Routes>
      <Route path="/" element={<AppLayout navigation={navigate}/>}>
          <Route index element={<HomePage />} />
          <Route path="/locations/:id" element={<LocationsDetails />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/locations" element={<Locations navigate={navigate}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/login' element={<LoginPage isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} setToken={setToken} />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path="/flight" element={<FlightsPage navigate={navigate}/>} />
          <Route path="/user" element={<UserPage navigate={navigate} Token={Token}/>} />
          {/* {ProtectedRoute('/flight', <FlightsPage/>)}          */}
          {/* <Route path="*" element={<PageNotFound />} />  */}
      </Route>
    </Routes>
    
  )
}

export default App