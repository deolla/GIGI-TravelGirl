import axios from "axios";


function getCurrentUser(){
    const Token = localStorage.getItem('jwtToken');
    // console.log(Token)
    try {
        axios.get('http://localhost:5000/current', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${Token}`
            }
        }).then(function (response) {

            return response.data;
        });
    } catch (err) {
        return console.log(err);
    }
}

export default getCurrentUser