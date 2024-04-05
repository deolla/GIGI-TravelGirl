import React from 'react';
import Bird from '../../assets/bird.jpg';
import Elephants from '../../assets/elephants.webp';
import ExploreAfricaCard from './ExploreAfricaCard';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExploreAfrica({handleBooklocation}) {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "fade-up",
    });
  }, []);

  const exploreAfricaData = [
    {
      image:Bird,
      country: 'Kenya',
      location: 'Maasai Mara National Reserve',
      description: 'One of Africa\'s greatest wildlife reserves, known for its exceptional population of lions, leopards, and cheetahs.',
  },
  {
      image:Elephants,
      country: 'South Africa',
      location: 'Kruger National Park',
      description: 'One of Africa\'s largest game reserves, renowned for its incredible diversity of wildlife, including the Big Five.',
  },
  {
    image:Bird,
    country: 'Kenya',
    location: 'Maasai Mara National Reserve',
    description: 'One of Africa\'s greatest wildlife reserves, known for its exceptional population of lions, leopards, and cheetahs.',
},
{
    image:Elephants,
    country: 'South Africa',
    location: 'Kruger National Park',
    description: 'One of Africa\'s largest game reserves, renowned for its incredible diversity of wildlife, including the Big Five.',
},
{
  image:Elephants,
  country: 'South Africa',
  location: 'Kruger National Park',
  description: 'One of Africa\'s largest game reserves, renowned for its incredible diversity of wildlife, including the Big Five.',
},
{
image:Bird,
country: 'Kenya',
location: 'Maasai Mara National Reserve',
description: 'One of Africa\'s greatest wildlife reserves, known for its exceptional population of lions, leopards, and cheetahs.',
},
  ]
  return (
    <div className="py-10 bg-gray-50">

        <div className="container">
            <h1 className=" font-bold py-2 pl-2 my-8 text-3xl border-l-8
             border-primary/70" data-aos="fade-up">
                Popular places in Africa</h1>
                <p className="text-lg mb-8">Explore some of the most breathtaking destinations across the African continent.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        exploreAfricaData.map((item, index) => (
                            <ExploreAfricaCard handleBooklocation={handleBooklocation}  key={index} {...item} />
                    ))}
                </div>
        </div>
    </div>
  )
}

export default ExploreAfrica