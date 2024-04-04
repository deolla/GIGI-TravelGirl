import { PropTypes } from 'prop-types'

function FlightDetails({ from, to, departure, returnDate, amount, onBookNow }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Flight Details</h2>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-600">From</p>
            <p className="text-lg font-semibold">{from}</p>
          </div>
          <div>
            <p className="text-gray-600">To</p>
            <p className="text-lg font-semibold">{to}</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-600">Departure</p>
            <p className="text-lg font-semibold">{departure}</p>
          </div>
          <div>
            <p className="text-gray-600">Return</p>
            <p className="text-lg font-semibold">{returnDate}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Amount</p>
          <p className="text-lg font-semibold">{amount}</p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onBookNow}
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
