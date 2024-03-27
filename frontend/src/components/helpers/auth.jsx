import { useEffect } from "react";

function SwitchToLogin(navigate) {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    useEffect(() => {
        if (isLoggedIn == 'false') {
            navigate('/login')
        } 
    }, [isLoggedIn,navigate])
}
export default SwitchToLogin