/* eslint-disable react/prop-types */

// import { useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import SignupForm from '../components/Authentication/SignupForm';
// import LoginForm from '../components/Authentication/LoginForm';
import { Outlet } from 'react-router-dom';

function AppLayout({navigation}) {

  return (
    <>
      <Navbar navigation={navigation}/>
      <main>
        <Outlet />
        <Footer />
      </main>
      
    </>
  )
}

export default AppLayout;
