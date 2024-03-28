import { useParams } from 'react-router-dom';

function LocationsDetails() {

  // Placeholder
  const locationDetails = {
    title: 'Mock Location Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis nec dictum nunc. Donec viverra ferme',
  };

  // Function to handle booking action
  const handleBookNow = () => {
    //booking logic here
    console.log('Booking now...');
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{locationDetails.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{locationDetails.description}</p>
        
        <button
          onClick={handleBookNow}
          className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded'"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default LocationsDetails;
