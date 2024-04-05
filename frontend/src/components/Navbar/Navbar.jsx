import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { FaCaretDown } from "react-icons/fa";
import {  useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from  "react-icons/hi";
import LogoutFunc from "../Authentication/Logout";
// import SignupForm from '../Authentication/SignupForm';

const DropdownLinks = [
  {
    name: 'Events',
    link: '#/events',
  },
  {
    name: 'Blog',
    link: '#/blog',
  },
  {
    name: 'Contact',
    link: '#/contact',
  }

];


// eslint-disable-next-line react/prop-types, no-unused-vars
function Navbar({ formVisibility, toggleSignupForm, toggleLoginForm, navigation }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[9999]">
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container py-[2px] sm:block hidden">
    <div className="flex justify-between">
      <p>10% off on Easter Travels</p>
      <p>call. +2347031910385</p>
    </div>
      </div>
      </div>

      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">

          {/* logo */}
          <div className="flex items-center">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img className="h-20 py-1 rounded-full" src={Logo} alt="GIGI-TravelGirl logo" />
            </Link>
            <span className="text-xl text-primary px-2 py-1 font-bold">GIGI-TravelGirl</span>
          </div>

          {/* navlinks for desktop */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li className="py-4">
                <NavLink to="/"  activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </NavLink>
              </li>

              <li className="py-4">
                <NavLink to="/locations" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                  Locations
                </NavLink>
              </li>

              <li className="py-4">
                <NavLink to="/flight" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                  Flight
                </NavLink>
              </li>

              <li className="py-4">
                <NavLink to="/about" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                  About
                </NavLink>
              </li>


              {/* dropdown menu */}
              <li className="py-4 relative group cursor-pointer">
                <div className="dropdown group flex items-center">
                  <span>Trending</span>
                  <span> 
                    <FaCaretDown
                     className="transition-all duration-200 group-hover:rotate-180" />
                     </span>
                </div>

                <div className=" bg-white top-[57px] p-2 absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px]">
                  <ul>
                    {DropdownLinks.map((data) => {
                      return (
                        <li key={data.name}>
                          <a className="inline-block w-full rounded-md p-2 hover:bg-primary/20" 
                          href="data.link">
                            {data.name}
                          </a>
                        </li>
                      )
                    })}

                  </ul>
                </div>
              </li>
            </ul>
          </div>

          
          {/* Login and signup buttons */}
          <div className="flex items-center gap-4">
            <button onClick={toggleSignupForm} className="bg-primary  text-white px-3 py-1 rounded-full">
              {localStorage.getItem('isLoggedIn') == 'true' ? <button onClick={() => LogoutFunc(navigation)}>Logout</button> : <Link to='/login'>Sign In</Link>}
            </button>
  
  
            {/* hamburger menu for smaller screens */}
            <div className="md:hidden block">
              {showMenu? (
                <HiMenuAlt1 onClick={toggleMenu} className="transition-all cursor-pointer" size={30} />
              ):(
                <HiMenuAlt3 onClick={toggleMenu} className="transition-all cursor-pointer" size={30} />

              ) }

            </div>
          </div>

          <div className={`${showMenu ? 'translate-x-0': '-translate-x-full'} absolute bg-black/90 text-white left-0 top-20
            font-semibold text-1xl text-center pt-8 pb-2 gap-2 w-full h-fit transition-transform duration-30 lg:hidden flex flex-col`}>
            
            <NavLink to="/"  activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </NavLink>

                <NavLink to="/locations" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                  Locations
                </NavLink>

                <NavLink to="/flight" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                  Flight
                </NavLink>

                <NavLink to="/about" activeclassname="active" onClick={() => window.scrollTo(0, 0)}>
                  About
                </NavLink>

          </div>

        </div>

      </div>

      {/* {showSignupForm && <SignupForm />} */}
{/* 
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} /> */}
      
    </div>
    
  )
}

export default Navbar;
