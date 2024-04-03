import { PropTypes } from 'prop-types'
import getFlight from "../helpers/current_flight";
import { useState } from 'react';
import bookFlight from '../helpers/bookFlights';

function FlightDetails({ flightId, navigation }) {
  const curFlight = getFlight(flightId)

  const handleSubmit = () => {
    const {from, to, departureTime,arrivalTime, price} = curFlight
    try{
      bookFlight({from, to, departureTime,arrivalTime, price})
      navigation('/')
    }
    catch{
      console.error('error Booking Flight')
    }
    // Add your booking submission logic here
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Flight Details</h2>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-600">From</p>
            <p className="text-lg font-semibold">{curFlight.from}</p>
          </div>
          <div>
            <p className="text-gray-600">To</p>
            <p className="text-lg font-semibold">{curFlight.to}</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-600">Departure</p>
            <p className="text-lg font-semibold">{curFlight.departureTime.split('T')[0]} {curFlight.departureTime.split('T')[1]}</p>
          </div>
          <div>
            <p className="text-gray-600">Arrival</p>
            <p className="text-lg font-semibold">{curFlight.arrivalTime.split('T')[0]} {curFlight.arrivalTime.split('T')[1]}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Amount</p>
          <p className="text-lg font-semibold">${curFlight.price}</p>
        </div>
          <button
          onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            
            >
            Book Now
          </button>
      </div>
    </div>
  );
}

// prop validation
FlightDetails.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    returnDate: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    onBookNow: PropTypes.func.isRequired,
  };


export default FlightDetails;
