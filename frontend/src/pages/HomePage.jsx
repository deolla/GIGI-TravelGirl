import Homevideo from '../assets/homevideo.mp4';
import HeroSection from '../components/HeroSection/HeroSection';
import Locations from '../components/Locations/Locations';
import ExploreAfrica from '../components/ExploreAfrica/ExploreAfrica';
import ExploreNigeria from '../components/ExploreAfrica/ExploreNigeria';
import Explore from '../components/Explore/Explore';
import Testimonials from '../components/Testimonials/Testimonials';
import BookNow from '../components/Booknow/BookNow';
import { useState } from 'react';

function Home({handleBooknow}) {
  const [booknow, setBooknow] = useState(false);

  const handleBooknow = () => {
    setBooknow(!BookNow);
  }
  
  return (
    <>
    <div>
      <div className='relative h-[700px]'>
        <video className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]" autoPlay loop muted >
          <source src={Homevideo} type='video/mp4' />
        
        </video>
        <HeroSection />
      </div>
      <Locations />
      <ExploreAfrica handleBooknow={handleBooknow} />
      <ExploreNigeria  handleBooknow={handleBooknow} />
      <Explore />
      <Testimonials />
    </div>
    </>
  )
}

export default Home