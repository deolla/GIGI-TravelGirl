import { IoCloseOutline } from 'react-icons/io5';

function BookNow({booknow, setBooknow}) {
  return (
    <>
    {booknow && (
      <div className='bg-black/50 h-screen w-screen fixed top-0 left-0 z-50 backdrop-blur-sm'>
        <div className=' w-[300px] bg-white p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md'>
          <div className='flex items-center justify-between'>
            <div>
              <h1>Book Trip</h1>
            </div>
            <div>
            <IoCloseOutline onClick={() => setBooknow(false)} className='cursor-pointer text-2xl'/>
            </div>
          </div>

          <div className='mt-4'>
            <input type="text" placeholder='FullName' 
            className='w-full px-2 py-1 mb-4 border border-gray-300
             rounded-full' 
             />
             
             <input type="email" placeholder='Email' 
            className='w-full px-2 py-1 mb-4 border border-gray-300
             rounded-full'
              />
              
              <input type="text" placeholder='No of people' 
            className='w-full px-2 py-1 mb-4 border border-gray-300
             rounded-full' />
             
             {/* submit button */}
             <div className="flex items-center justify-center">
        <button className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>

          </div>
          
        </div>
      </div>
    )}
    </>
  )
}

export default BookNow