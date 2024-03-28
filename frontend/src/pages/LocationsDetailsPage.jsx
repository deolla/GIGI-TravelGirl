import LocationDetails from "../components/Locations/LocationsDetails";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function LocationDetailsPage(){
    const { id } = useParams();
    return <div className="mt-20">

        <LocationDetails locationId={id}/>
    </div>
}

export default LocationDetailsPage;