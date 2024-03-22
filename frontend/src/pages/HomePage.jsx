import Homevideo from '../assets/homevideo.mp4'
import HeroSection from '../components/HeroSection/HeroSection'
import Locations from '../components/Locations/Locations'

function Home() {
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
    </div>
    </>
  )
}

export default Home