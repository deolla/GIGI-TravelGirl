import { useParams } from "react-router-dom";
import SearchComponent from "../components/SearchResults/SearchComponent";
import allLocations from "../components/helpers/allLocations";

function SearchResult() {
    const { place } = useParams()
    allLocations(place)
    return <SearchComponent place={place}/>
}

export default SearchResult;
