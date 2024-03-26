import GetFlights from "../components/Flights/FlightTabs"
import SearchBar from "../components/Flights/SearchBar"
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react"
function FlightsPage(){
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
        } 
    }, [isLoggedIn,navigate])
    if (!isLoggedIn) return null

    return (
    <div className='pt-14 mt-14 m-8'>
        <SearchBar/>
        <GetFlights/>
    </div>)
}

export default FlightsPage