import BoatCruise from '../../assets/boatcruise.jpg';
import IvoryCoast from '../../assets/ivorycoast.jpg';
import Telemoundoaf from '../../assets/telemoundoaf.jpg';
import LocationsCard from './LocationsCard';


function Locations() {

    const locationsdata = [
        {
            image:BoatCruise,
            title: 'Boat Cruise',
            location: 'Nigeria',
            description: 'Mcarthy resort in Delta State with amazing facilities. lorem ipsum is a dummy text. lorem is a dummy text. lorem ipsum',
            price: 500,
            type: 'Relaxation',
        },
        {
            image:IvoryCoast,
            title: 'Cruise',
            location: 'Ivory Coast',
            description: "Côte d'Ivoire, good lodge and logistics. Lorem ipssum is a dummy text, it is a dummy text",
            price: 1000,
            type: 'Relaxation',
        },
        {
            image:Telemoundoaf,
            title: 'Hangout',
            location: 'Nigeria',
            description: 'Lagos, free lunch and beach. Lorem ipsum is a dummy text and dummy text',
            price: 300,
            type: 'Fun',
        },
        {
            image:IvoryCoast,
            title: 'Cruise',
            location: 'Ivory Coast',
            description: "Côte d'Ivoire, good lodge and logistics. Lorem ipssum is a dummy text, it is a dummy text",
            price: 1000,
            type: 'Relaxation',
        },
        {
            image:BoatCruise,
            title: 'Boat Cruise',
            location: 'Nigeria',
            description: 'Mcarthy resort in Delta State with amazing facilities. lorem ipsum is a dummy text. lorem is a dummy text. lorem ipsum',
            price: 500,
            type: 'Relaxation',
        },
        {
            image:Telemoundoaf,
            title: 'Hangout',
            location: 'Nigeria',
            description: 'Lagos, free lunch and beach. Lorem ipsum is a dummy text and dummy text',
            price: 300,
            type: 'Fun',
        },
    ]
  return (
    <div className="py-10 bg-gray-50">

        <div className="container">
            <h1 className=" font-bold py-2 pl-2 my-8 text-3xl border-l-8
             border-secondary/50 ">
                Upcoming Vacations</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        locationsdata.map((item, index) => (
                            <LocationsCard key={index} {...item} />
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Locations