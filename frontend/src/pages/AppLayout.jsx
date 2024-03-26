
// import { useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import SignupForm from '../components/Authentication/SignupForm';
// import LoginForm from '../components/Authentication/LoginForm';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  // const [showLoginForm, setShowLoginForm] = useState(false);

  // const toggleLoginForm = () => {
  //   setShowLoginForm(!showLoginForm);
  // };

  return (
    <>
      <Navbar />
      {/* {showLoginForm ? (
        <LoginForm onToggleForm={toggleLoginForm} />
      ) : (
        <SignupForm onToggleForm={toggleLoginForm} />
      )} */}

      <main>
        <Outlet />
        <Footer />
      </main>
      
    </>
  )
}

export default AppLayout;
