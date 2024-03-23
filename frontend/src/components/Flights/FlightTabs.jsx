import bird from '../../assets/nigeria/kwara.jpg'


function GetFlights() {
    return <div className='container flex flex-col justify-end mt-6 max-w-3xl '>
        <div className="p-6 mx-auto bg-white rounded-xl shadow-md flex w-full justify-between space-x-4 mb-4 mt-4">
            <div className='flex-grow flex justify-center flex-col'>
                <div className='flex flex-grow '>
                    <div className="flex-shrink-0 self-center hidden sm:block">
                        <img className="h-12 w-12 self-center" src={bird} alt="ChitChat Logo" />
                    </div>
                    <div className='flex sm:flex-grow justify-center'>
                        <div className='ml-6 flex flex-col justify-center'>
                            <p className='text-lg'>2:30</p>
                            <p className='text-sm'>LOS</p>
                        </div>
                        <hr className='max-w-20 sm:min-w-20 ml-6 mr-6 self-center'/>
                        <div className='flex flex-col justify-center'>
                            <p className='text-lg'>3:40</p>
                            <p className='text-sm'>LGW</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-lg'>$100</p>
                <div className='flex'>
                    <button type="submit" className='p-2 rounded-md bg-blue-500 text-white text-sm self-center'>checkout</button>
                </div>
            </div>
        </div> 
        
        <div className="p-6 mx-auto bg-white rounded-xl shadow-md flex w-full justify-between space-x-4 mb-4 mt-4">
            <div className='flex-grow flex justify-center flex-col'>
                <div className='flex flex-grow '>
                    <div className="flex-shrink-0 self-center hidden sm:block">
                        <img className="h-12 w-12 self-center" src={bird} alt="ChitChat Logo" />
                    </div>
                    <div className='flex sm:flex-grow justify-center'>
                        <div className='ml-6 flex flex-col justify-center'>
                            <p className='text-lg'>2:30</p>
                            <p className='text-sm'>LOS</p>
                        </div>
                        <hr className='max-w-20 sm:min-w-20 ml-6 mr-6 self-center'/>
                        <div className='flex flex-col justify-center'>
                            <p className='text-lg'>3:40</p>
                            <p className='text-sm'>LGW</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-lg'>$100</p>
                <div className='flex'>
                    <button type="submit" className='p-2 rounded-md bg-blue-500 text-white text-sm self-center'>checkout</button>
                </div>
            </div>
        </div> 


    </div>
}

export default GetFlights