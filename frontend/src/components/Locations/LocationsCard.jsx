import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LocationsCard({image, title, location, description, price, type}) {
  return (
    <div className=" transition-all duration-500 hover:shadow-xl shadow-lg cursor-pointer">
      <div className='overflow-hidden'>
        <img src={image}
        alt='places for vacation'
        className='object-cover w-full h-[220px] mx-auto hover:scale-110 hover:skew-x-2 transition duration-700'
        />
      </div>

      <div className='p-2 space-y-2'>
        <h1 className='text-xl font-bold line-clamp-1'>{title}</h1>
        <div className='flex items-center gap-2 opacity-70'>
          <IoLocationSharp />
          <span>{location}</span>
        </div>
          <p className='line-clamp-2'>{description}</p>
        <div className='flex justify-between items-center border-t-2 y-3 !mt-3'>

          <div className='opacity-70'>
            <p>{type}</p>
          </div>

          <div>
            <p className='text-2xl font-bold'>${price}</p>
          </div>
      </div>
      <Link to="/locationsdetails">
      <button className='bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded'>
        DETAILS
      </button>
    </Link>
      </div>
    </div>
  )
}

//write prop validation
LocationsCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
}

export default LocationsCard