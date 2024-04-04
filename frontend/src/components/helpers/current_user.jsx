import axios from "axios";


async function getCurrentUser(){
    const Token = localStorage.getItem('jwtToken');
    // console.log(Token)
    try {
        const response = await axios.get('http://localhost:5000/current', {
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

export default getCurrentUser