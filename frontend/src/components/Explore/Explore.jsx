import React from 'react'
import Gigi from '../../assets/gigi.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaArrowRight } from 'react-icons/fa';


function Explore() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "fade-up",
        });
      }, []);
  return (
    <div className='bg-gray-100 min-h-[550px]'>
        <div className='flex justify-center items-center min-h-[550px] py-12 sm:py-0 backdrop-blur-xl'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 items-center'>
                    {/* image section */}
                    <div>
                        <img  data-aos='flip-up' src={Gigi} alt="Image of Gigi"
                        className='object-cover mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.5)] h-[350px] max-w-[450px]'/>
                    </div>
                    {/* text section */}
                    <div>
                        <h1 data-aos='fade-up' className='text-3xl font-bold sm:text-4xl'>Explore with GIGI-TravelGirl</h1>
                        <p data-aos='fade-up' className='text-gray-500 text-sm tracking-wide leading-8'>Book flights, hotels and vactions with ease and within budget.
                        </p>
                        <div>
                            <div data-aos='zoom-in'>
                            <div className="text-center mt-2">
        <button className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded">
             Get Started
        </button>
      </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Explore