import LocationsCard from './LocationsCard';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Locations() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "fade-up",
        });
      }, []);

      let locationData
    try {

         locationData = JSON.parse(localStorage.getItem('locationsData'))
    }catch(e){
        locationData = []
    }
    // console.log(locationData)
  return (
    <div className="py-10 bg-gray-50">

        <div className="container">
            <h1 className=" font-bold py-2 pl-2 my-8 text-3xl border-l-8
             border-secondary/50" data-aos="fade-up">
                Popular Locations Near You</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        locationData.map((item, index) => (
                            <LocationsCard key={index} type={'fun'} price={item.price.total} image={item.images} location={item.city} title={item.name} description={item.type} locationId={'/locations/' + item.id}/>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Locations