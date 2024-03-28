import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import axios from "axios";
import FlightTabs from './FlightTabs'
function SearchBar() {    

    const [budgetValue, setBudgetvalue] = useState(50);
    const [apiData, setApiData] = useState([]);

useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "fade-up",
    });
  }, []);

  const [formData, setFormData] = useState({
    to: '',
    from: '',
    date: '',
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  useEffect(() => {
    // Load data from local storage when the component mounts
    const savedData = localStorage.getItem('cardsData');
    if (savedData) {setApiData(JSON.parse(savedData));}
  
      // Function to handle beforeunload event

  const handleBeforeUnload = () => {
    // Remove data from local storage when the user leaves the page
        localStorage.removeItem('cardsData');
    };
    // Add event listener to handle beforeunload event
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function to remove event listener when component unmounts
    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
    };
}, [ setApiData]);



  const handleSubmit = (e) => {
    const Token = localStorage.getItem('jwtToken');
    e.preventDefault();
    axios.post('http://localhost:5000/flight', formData,{  headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${Token}`
            
          }})
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem('cardsData',JSON.stringify(response.data))
                setApiData(response.data)
                console.log(response.data)
            }else{
                console.error('failed to get flight data' );
            }
        }).catch (error =>{
           console.error('error with flight data', error);
        })
        setFormData({
            to: '',
            from: '',
            date: '',
        });
    };
  

    return <div>

    <form action="" onSubmit={handleSubmit} method="">

        <div data-aos='fade-up' data-aos-delay='600' className="relative p-4 bg-white space-y-4 rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 py-3 gap-4 ">
                <div className="">
                    <label htmlFor="from" className="opacity-70">
                        From
                    </label>
                    <input type="text" name="from" value={formData.from} onChange={handleInputChange} id="from" placeholder="Ghana" 
                    className="bg-gray-200 p-3 my-2 w-full range accent-secondary focus:outline-primary focus:outline outline-1 rounded-full"/>

                    <label htmlFor="to" className="opacity-70">
                        To
                    </label>
                    <input type="text" name="to" id="to" value={formData.to} onChange={handleInputChange} placeholder="South Africa" 
                    className="bg-gray-200 p-3 my-2 w-full range accent-secondary focus:outline-primary focus:outline outline-1 rounded-full"/>
                </div>
                <div>
                    <label htmlFor="date" className="opacity-70">
                        Date
                    </label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} id="date"
                    className="bg-gray-200 p-3 my-2 w-full !placeholder-slate-400 focus:outline-primary focus:outline outline-1 rounded-full"/> 
                        <label htmlFor="destination" className="opacity-70 block">
                        <div className="flex justify-between items-center w-full">
                            <p>Budget</p>
                            <p className="text-xl font-bold">
                                 ${budgetValue} 
                            </p>
                        </div>
                    </label>
                    <div className="flex justify-center items-center p-2 bg-gray-200 rounded-full mt-2">
                        <input type="range" name="destination" id="destination"
                         className="w-full h-2 my-2 bg-gradient-to-r from-primary to-secondary appearance-none rounded-full"
                         min='50'
                         max='1000'
                         value={budgetValue}
                         step='5'
                         onChange={(e) => setBudgetvalue(e.target.value)}
                         />

                    </div>
                </div>

            </div>
            {/* search button */}
            <button className="bg-gradient-to-r from-secondary  to-primary px-4 py-2
             text-3xl font-bold text-white
             hover:scale-105 duration-200 rounded-full absolute -bottom-9 left-1/2 
             -translate-x-1/2">
                Search
            </button>
        </div>
    </form>
     <div className='container flex flex-col justify-end mt-6 max-w-3xl '> 
     {apiData.map((index, value) => <FlightTabs flight={value}/>)}
     
     </div>
    </div> 

}


export default SearchBar