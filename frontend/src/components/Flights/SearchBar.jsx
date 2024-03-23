import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function SearchBar() {    

const [budgetValue, setBudgetvalue] = useState(50);

useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "fade-up",
    });
  }, []);

    return <form action="http://127.0.0.1:5173/flight" method="post">

        <div data-aos='fade-up' data-aos-delay='600' className="relative p-4 bg-white space-y-4 rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 py-3 gap-4 ">
                <div className="">
                    <label htmlFor="destination" className="opacity-70">
                        From
                    </label>
                    <input type="text" name="destination" id="destination" placeholder="Ghana" 
                    className="bg-gray-200 p-3 my-2 w-full range accent-secondary focus:outline-primary focus:outline outline-1 rounded-full"/>

                    <label htmlFor="destination" className="opacity-70">
                        To
                    </label>
                    <input type="text" name="destination" id="destination" placeholder="South Africa" 
                    className="bg-gray-200 p-3 my-2 w-full range accent-secondary focus:outline-primary focus:outline outline-1 rounded-full"/>
                </div>
                <div>
                    <label htmlFor="destination" className="opacity-70">
                        Date
                    </label>
                    <input type="date" name="destination" id="destination"
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
}


export default SearchBar