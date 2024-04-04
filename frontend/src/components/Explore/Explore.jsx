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
                        <h1 data-aos='fade-up' className='text-3xl font-bold sm:text-4xl'>Explore Africa with GIGI-TravelGirl</h1>
                        <p data-aos='fade-up' className='text-gray-500 text-sm tracking-wide leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nul corrupti! Officia?
                        Recusandae error magni, accusantium, sapiente nam reprehenderit perferendis tempore voluptas cum at est a eligendi odit iure qui consequatur, tenetur sed voluptate quod possimus? Quo, suscipit! Eaque ex assumenda ad!
                        Velit, aperiam. Corporis, quis modi sunt ratione nisi distinctio odit et possimus! Laboriosam debitis nesciunt, quibusdam obcaecati placeat non laborum velit eum, voluptatem omnis modi quis inventore, repellat reiciendis. Expedita?
                        Laudantium facilis pariatur quaerat corporis! Est dolore nihil veniam, 
                        reprehenderit vitae repudiandae deleniti dignissimos minus optio totam ipsum quis officiis eum tempore recusandae doloribus cum facilis omnis! Cumque, consequatur temporibus.
                        Soluta illo laboriosam vitae reprehenderit quia sit quo atque id asperiores natus exercitationem dolorem earum, alias tempore odit harum? Amet inventore at nulla atque ad fugiat!
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