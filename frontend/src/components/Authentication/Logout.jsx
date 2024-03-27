// import { useNavigate } from "react-router-dom"
import axios from "axios"
function LogoutFunc(navigation){
    // const navigation = useNavigate()
    axios.get('http://localhost:5000/api/logout', {  headers: {
        'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Allow requests from all origins
        }})
        .then(response => {
            if (response.status === 200) {
                // console.log(response)
                localStorage.setItem('isLoggedIn', 'false')
                localStorage.setItem('jwtToken', '')
                navigation('/login')
            }else{
                console.error('logout failed' );
            }
        }).catch (error =>{
           console.error('error with logout', error);
        })

    return null
}

export default LogoutFunc