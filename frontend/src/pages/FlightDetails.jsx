/* eslint-disable react/prop-types */
// import GetFlights from "../components/Flights/FlightTabs"
import FlightDetails from "../components/Flights/FlightDetails"
import SwitchToLogin from "../components/helpers/auth"
import { useParams } from "react-router-dom";

function FlightDetailsPage({navigate}){
    const { id } = useParams();
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    SwitchToLogin(navigate)
    if (!isLoggedIn) return null
    return (
    <div className='pt-14 mt-14 m-8'>
        <FlightDetails flightId={id} navigation={navigate}/>
    </div>)
}

export default FlightDetailsPage