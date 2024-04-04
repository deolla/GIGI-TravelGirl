/* eslint-disable react/prop-types */

function FlightTabs({flight}) {
    function formatTime(timeString) {
        const date = new Date(timeString);
        
        // Get hours and minutes
        const hours = date.getHours();
        const minutes = date.getMinutes();
        
        // Determine if it's AM or PM
        const ampm = hours >= 12 ? 'pm' : 'am';
        
        // Convert hours to 12-hour format
        const formattedHours = hours % 12 || 12;
        
        // Format minutes with leading zero if needed
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        
        // Construct the formatted time string
        const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
        
        return formattedTime;
    }
        const handleRedirect = (url) => {
          window.open(url, '_blank');
        };
    return <div className="p-6 mx-auto bg-white rounded-xl shadow-md flex w-full justify-between space-x-4 mb-4 mt-4">
            <div className='flex-grow flex justify-center flex-col'>
                <div className='flex flex-grow '>
                    <div className="flex-shrink-0 self-center hidden sm:block">
                        {/* <img className="h-12 w-12 self-center" src={flight.logo} alt="ChitChat Logo" /> */}
                        <p className='text-sm'>{flight.airline}</p>
                    </div>
                    <div className='flex sm:flex-grow justify-center'>
                        <div className='ml-6 flex flex-col justify-center'>
                            <p className='text-lg'>{formatTime(flight.departureTime)}</p>
                            <p className='text-sm'>{flight.from}</p>
                        </div>
                        <hr className='max-w-20 sm:min-w-20 ml-6 mr-6 self-center'/>
                        <div className='flex flex-col justify-center'>
                            <p className='text-lg'>{ formatTime(flight.arrivalTime)}</p>
                            <p className='text-sm'>{flight.to}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-lg'>${flight.price}</p>
                <div className='flex'>
                    <button type="submit" onClick={() => handleRedirect(flight.url)} className='p-2 rounded-md bg-blue-500 text-white text-sm self-center'>book flight</button>
                </div>
            </div>
        </div> 
}

export default FlightTabs