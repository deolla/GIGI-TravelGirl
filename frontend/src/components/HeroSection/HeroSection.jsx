import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
 


function HeroSection() {
    const [budgetValue, setBudgetvalue] = useState(50);
    const [formData, setFormData] = useState({
        place: ''
    })
    
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "fade-up",
        });
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({
          ...formData,
          [name]: value
        });
    };

      const navigation = useNavigate()
      const handleSubmit = (e) => {

        e.preventDefault();
        try{
            
           navigation('/Searchresult/' + formData.place)
            
        }
        catch{
          console.error('error Booking Flight')
        }
        // Add your booking submission logic here
      };
  return (
    <div className="bg-black/20 h-full">
        <div className="bg-primary/10 h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 gap-4">
                {/* text section */}
                <div className="text-white ">
                    <p data-aos="fade-up" className="sm:max-w-md text-center mt-12 pt-5 sm:mt-0">Wanna go on a vacation? GIGI-TravelGirl will organize your trip with the best places and within best budget!</p>
                    <p className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="300">
                        Find Your Destination  
                    </p>
                </div>
                {/* form section */}
                <form action="" onSubmit={handleSubmit} method="">
                    <div data-aos='fade-up' data-aos-delay='600' className="relative p-4 bg-white space-y-4 rounded-md">
                        <div className="grid grid-cols-1 sm:grid-cols-4 py-3 gap-4 ">
                            <div>
                                <label htmlFor="place" className="opacity-70">
                                    Search your next vacation
                                </label>
                                <input type="text" name="place" id="place" placeholder="Ghana"  value={formData.place} onChange={handleInputChange}
                                className="bg-gray-200 p-3 my-2 w-full range accent-secondary focus:outline-primary focus:outline outline-1 rounded-full"/>
                            </div>
                            <div>
                                <label htmlFor="date" className="opacity-70">
                                    Date
                                </label>
                                <input type="date" name="date" id="date"
                                className="bg-gray-200 p-3 my-2 w-full !placeholder-slate-400 focus:outline-primary focus:outline outline-1 rounded-full"/> 
                            </div>
                            <div>
                                <label htmlFor="nop" className="opacity-70">
                                    No of persons
                                </label>
                                <input type="text" name="nop" id="nop" placeholder="one"
                                className="bg-gray-200 p-3 my-2 w-full range accent-secondary focus:outline-primary focus:outline outline-1 rounded-full"/> 
                            </div>
                            <div>
                                <label htmlFor="budget" className="opacity-70 block">
                                    <div className="flex justify-between items-center w-full">
                                        <p>Budget</p>
                                        <p className="text-xl font-bold">${budgetValue}</p>
                                    </div>
                                </label>
                                <div className="flex justify-center items-center p-2 bg-gray-200 rounded-full">
                                    <input type="range" name="budget" id="budget"
                                     className="w-full h-2 my-2 bg-gradient-to-r from-primary to-secondary appearance-none rounded-full"
                                     min='50'
                                     max='10000'
                                     value={budgetValue}
                                     step='5'
                                     onChange={(e) => setBudgetvalue(e.target.value)}/>

                                </div>
                            </div>
                        </div>
                        {/* search button */}
                    <button className="bg-gradient-to-r from-secondary  to-primary px-4 py-2
                     text-3xl font-bold text-white
                     hover:scale-105 duration-200 rounded-full absolute -bottom-5 left-1/2 
                     -translate-x-1/2">
                        Search
                    </button>

                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection