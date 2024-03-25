import GetFlights from "../components/Flights/FlightTabs"
import SearchBar from "../components/Flights/SearchBar"
function FlightsPage(){
    return (
    <div className='pt-14 mt-14 m-8'>
        <SearchBar/>
        <GetFlights/>
    </div>)
}

export default FlightsPage