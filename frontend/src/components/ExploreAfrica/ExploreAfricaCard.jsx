import { IoLocationSharp } from 'react-icons/io5';


function ExploreAfricaCard({image, country, state, location, description, handleBooknow}) {
  
  return (
    <div className='transition-all duration-500 hover:shadow-xl shadow-lg cursor-pointer"'>

      <div className='overflow-hidden'>
        <img src={image} alt="popular place in Africa"
        className='object-cover w-full h-[220px] mx-auto hover:scale-110 hover:skew-x-2 transition duration-700'
         />
      </div>

      <div className='p-2 space-y-2'>
        <h1 className='text-xl font-bold line-clamp-1'>{country || state}</h1>
        <div className='flex items-center gap-2 opacity-70'>
          <IoLocationSharp />
          <span>{location}</span>
        </div>
          <p className='line-clamp-2'>{description}</p>
        <div className='flex justify-between items-center border-t-2 y-3 !mt-3'>

      </div>
      </div>

      <div className="text-center mt-2">
        <button onClick={() => handleBooknow()} className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </div>

    </div>
  )
}

export default ExploreAfricaCard