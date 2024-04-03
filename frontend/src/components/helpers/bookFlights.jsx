import axios from 'axios'

async function bookFlight(vals) {
    const Token = localStorage.getItem('jwtToken');
    // console.log(Token)
    try {
        const response = await axios.post('http://localhost:5000/booking/flight', vals, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${Token}`
            }
        });
        return response.data;
    } catch (err) {
        return console.log(err);
    }
}

export default bookFlight