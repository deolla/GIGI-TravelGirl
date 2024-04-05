/* eslint-disable react/prop-types */
// import GetFlights from "../components/Flights/FlightTabs"
import SearchBar from "../components/Flights/SearchBar"
import SwitchToLogin from "../components/helpers/auth"

function FlightsPage({navigate}){
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    SwitchToLogin(navigate)
    if (!isLoggedIn) return null
    return (
    <div className='pt-14 mt-14 m-8'>
        <SearchBar navigation={navigate}/>
        {/* <GetFlights/> */}
    </div>)
}

export default FlightsPage