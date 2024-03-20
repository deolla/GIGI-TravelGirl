import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";


function HeroSection() {
    const [budgetValue, setBudgetvalue] = useState(50);

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "fade-up",
        });
      }, []);
  return (
    <div className="bg-black/20 h-full">
        <div className="bg-primary/10 h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 gap-4">
                {/* text section */}
                <div className="text-white">
                    <p data-aos="fade-up">Wanna go on a vacation?</p>
                    <p className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="300">
                        Find Your Destination  
                    </p>
                </div>
                {/* form section */}
                <div data-aos='fade-up' data-aos-delay='600' className="relative p-4 bg-white space-y-4 rounded-md">
                    <div className="grid grid-cols-1 sm:grid-cols-4 py-3">
                        <div>
                            <label htmlFor="destination" className="opacity-70">
                                Search your next vacation
                            </label>
                            <input type="text" name="destination" id="destination" placeholder="Ghana" 
                            className="bg-gray-200 p-3 my-2 w-full range accent-secondary focus:outline-primary focus:outline outline-1 rounded-full"/>
                        </div>
                        <div>
                            <label htmlFor="destination" className="opacity-70">
                                Date
                            </label>
                            <input type="date" name="destination" id="destination"
                            className="bg-gray-200 p-3 my-2 w-full !placeholder-slate-400 focus:outline-primary focus:outline outline-1 rounded-full"/> 
                        </div>
                        <div>
                            <label htmlFor="destination" className="opacity-70">
                                No of persons
                            </label>
                            <input type="text" name="destination" id="destination" placeholder="one"
                            className="bg-gray-200 p-3 my-2 w-full range accent-secondary focus:outline-primary focus:outline outline-1 rounded-full"/> 
                        </div>
                        <div>
                            <label htmlFor="destination" className="opacity-70 block">
                                <div className="flex justify-between items-center w-full">
                                    <p>Budget</p>
                                    <p className="text-xl font-bold">${budgetValue}</p>
                                </div>
                            </label>
                            <div className="flex justify-center items-center p-2 bg-gray-200 rounded-full">
                                <input type="range" name="destination" id="destination"
                                 className="w-full h-2 my-2 bg-gradient-to-r from-primary to-secondary appearance-none rounded-full"
                                 min='50'
                                 max='1000'
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
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection