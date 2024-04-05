import axios from "axios"


function getLocation (locationId){
    let location = null;
    axios.get('http://localhost:5000/location/' + locationId, { headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }}).then(response => {
        if (response.status === 200) {
            localStorage.setItem('current_location', JSON.stringify({name: response.data.name, location: response.data.address_obj.city, url: response.data.web_url}))
            
            location =  JSON.parse(localStorage.getItem('current_location'))
        }
    }).catch(err => {
        console.log(err);
    })

    return location
}

export default getLocation