import { PropTypes } from 'prop-types'
import getFlight from "../helpers/current_flight";
import { useState } from 'react';
import bookFlight from '../helpers/bookFlights';
import StripeCheckout from 'react-stripe-checkout';

function FlightDetails({ flightId, navigation }) {
  const curFlight = getFlight(flightId)
  const {from, to, departureTime,arrivalTime, price} = curFlight
  const onToken = (token) => {
    console.log(token)
    bookFlight({from, to, departureTime,arrivalTime, price, token})
    navigation('/')
  }

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
        <StripeCheckout
                    amount={parseInt(price) * 100}
                    currency='USD'
                    token={onToken}
                    stripeKey="pk_test_51P145ZCGlD81jPCTGNnfglg2PEYvgWp6puXhtCyTY6yripd0dO6SYiAXtx7Ar4SpiqnvDxXXZv1g7523QhfvUVBC00AmDqXutX"
          />
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
