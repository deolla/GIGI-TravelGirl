import LocationDetails from "../components/Locations/LocationsDetails";
import { useParams } from "react-router-dom";
import SwitchToLogin from "../components/helpers/auth";
// eslint-disable-next-line react/prop-types
function LocationDetailsPage({navigation}){
    const { id } = useParams();
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    SwitchToLogin(navigation)
    if (!isLoggedIn) return null
    
    return <div className="mt-20">
        <LocationDetails locationId={id} navigation={navigation}/>
    </div>
}


export default LocationDetailsPage;