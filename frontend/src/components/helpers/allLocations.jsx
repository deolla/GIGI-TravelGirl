import axios from "axios";

function allLocations(place = '', type = '') {
    // localStorage.removeItem('locationsData');

    const lat = localStorage.getItem('latitude')
    const lon = localStorage.getItem('longitude')
    axios.get('http://localhost:5000/location', { params: {location: place, lon, lat,type: type},  headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'Authorization': `Bearer ${Tok}`
          }}).then(response => {
            if (response.status === 200) {
              if (response.data.results) {
                  localStorage.setItem('locationsData', JSON.stringify(response.data.results) || [{}])
                }
              return true
            }
    })

   
}

export default allLocations