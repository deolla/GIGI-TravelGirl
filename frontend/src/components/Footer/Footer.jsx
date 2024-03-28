/* eslint-disable react/jsx-key */

import { FaFacebook, FaInstagram, FaTiktok, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Homevideo from '../../assets/homevideo.mp4'
import FooterLogo from '../../assets/logo.jpg'


const footerLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Locations',
    link: '/locations',
  },
  {
    title: 'Flight',
    link: '/flight',
  },

]

function Footer() {
  return (
    <div className='py-10 relative overflow-hidden'>
      <video
      autoPlay
      loop
      muted
      className='object-cover h-full w-full overflow-hidden absolute right-0 top-0 z-[-1]'>
        <source src={Homevideo} type='video/mp4' />
      </video>

      <div className='container'>
        <div className='bg-white/80 backdrop-blur-sm rounded-t-xl grid md:grid-cols-3 py-5 '>
          <div>
            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
              <img src={FooterLogo} className=' px-1 max-h-[60px] rounded-full' alt="logo" />
            </h1>
            <p className='text-sm px-4'>Planning for a trip? GIGI-TravelGirl will organize your trip with the best places and within best budget!
            </p>
            <br />
            <div className='flex items-center gap-3 mt-3 px-4'>
              <FaLocationArrow />
              <p>Lagos, Nigeria</p>
            </div>
            <div className='flex items-center gap-3 mt-6 px-4'>
              <FaMobileAlt />
              <p>+234 70319 10385</p>
            </div>
            {/* socials */}
            <div>

              <div className='flex items-center gap-3 mt-6 px-4'>
                <a href="https://www.facebook.com/Gillian ImoladeAdeh/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/instadiaryofgigitravelgirl/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/gigitravelgirl/" target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
          {/* footerlinks */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>

            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Company</h1>
              <ul className="flex flex-col gap-3">
                    {footerLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
            </div>

            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Help</h1>
              <ul className="flex flex-col gap-3">
                    {footerLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
            </div>

            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Our Team</h1>
              <ul className="flex flex-col gap-3">
                    {footerLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
            </div>

          </div>
        </div>

        <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-secondary text-white">
              @copyright 2024 All rights reserved || Developed by Nandom, Keme and Adeola.
            </div>
          </div>
      </div>
      </div>
  )
}

export default Footer