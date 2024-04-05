import axios from 'axios'

async function bookHotel(vals) {
    const Token = localStorage.getItem('jwtToken');
    // console.log(Token)
    try {
        const response = await axios.post('http://localhost:5000/booking/hotel', vals, {
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

export default bookHotel