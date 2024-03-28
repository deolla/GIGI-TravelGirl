import BoatCruise from '../../assets/boatcruise.jpg';
import IvoryCoast from '../../assets/ivorycoast.jpg';
import Telemoundoaf from '../../assets/telemoundoaf.jpg';
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

    const locationsdata = [
        {
            image:BoatCruise,
            title: 'Mccarthy Resort',
            location: 'Nigeria',
            description: 'Mcarthy resort in Delta State with amazing facilities. lorem ipsum is a dummy text. lorem is a dummy text. lorem ipsum',
            price: 500,
            type: 'Relaxation',
        },
        {
            image:IvoryCoast,
            title: "St paul's Cathedral",
            location: 'Ivory Coast',
            description: "Côte d'Ivoire, good lodge and logistics. Lorem ipssum is a dummy text, it is a dummy text",
            price: 1000,
            type: 'Relaxation',
        },
        {
            image:Telemoundoaf,
            title: 'Nike gallery',
            location: 'Nigeria',
            description: 'Lagos, free lunch and beach. Lorem ipsum is a dummy text and dummy text',
            price: 300,
            type: 'Fun',
        },
        {
            image:IvoryCoast,
            title: "St Paul's Cathedral",
            location: 'Ivory Coast',
            description: "Côte d'Ivoire, good lodge and logistics. Lorem ipssum is a dummy text, it is a dummy text",
            price: 1000,
            type: 'Relaxation',
        },
        {
            image:BoatCruise,
            title: 'Mccarthy Resort',
            location: 'Nigeria',
            description: 'Mcarthy resort in Delta State with amazing facilities. lorem ipsum is a dummy text. lorem is a dummy text. lorem ipsum',
            price: 500,
            type: 'Relaxation',
        },
        {
            image:Telemoundoaf,
            title: 'Nike Gallery',
            location: 'Nigeria',
            description: 'Lagos, free lunch and beach. Lorem ipsum is a dummy text and dummy text',
            price: 300,
            type: 'Fun',
        },
    ]

    const locationData = JSON.parse(localStorage.getItem('locationsData'))
    // console.log(locationData)
  return (
    <div className="py-10 bg-gray-50">

        <div className="container">
            <h1 className=" font-bold py-2 pl-2 my-8 text-3xl border-l-8
             border-secondary/50" data-aos="fade-up">
                Upcoming Vacations</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        locationData.map((item, index) => (
                            <LocationsCard key={index} type={locationsdata[Math.floor(Math.random() * 3)].type} price={locationsdata[Math.floor(Math.random() * 3)].price} image={locationsdata[Math.floor(Math.random() * 3)].image} location={item.address_obj.city} title={item.name} description={'Lagos, free lunch and beach. Lorem ipsum is a dummy text and dummy text'} locationId={'/locations/' + item.location_id}/>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Locations