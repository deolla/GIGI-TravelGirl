import { useNavigate } from "react-router-dom"

function LogoutFunc({setLoggedIn}){
    const navigate = useNavigate()
    setLoggedIn(false)
    localStorage.setItem('isLoggedIn', 'false')
    navigate('/login')
}

export default LogoutFunc