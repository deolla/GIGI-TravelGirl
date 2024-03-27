
import { Link } from "react-router-dom";

function SearchResult() {
    const places = [
        { name: "Accra", description: "Capital city of Ghana", image: "accra.jpg", price: 100 },
        { name: "Kumasi", description: "Historical city in Ghana", image: "kumasi.jpg", price: 80 },
        { name: "Cape Coast", description: "Coastal city known for its castles", image: "cape_coast.jpg", price: 120 },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 pt-20">Search Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {places.map((place, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src={place.image} alt={place.name} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                                <p className="text-gray-700 mb-2">{place.description}</p>
                                <p className="text-gray-800 font-bold">${place.price}</p>
                            </div>
                            <div className="bg-gray-100 px-4 py-2">
                                <Link to={`/book/${place.name}`} className="bg-gradient-to-r from-primary to-secondary text-white  font-bold hover:text-primary-700">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <Link to="/" className="bg-gradient-to-r from-primary to-secondary text-white font-bold hover:text-primary-700">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
