/* eslint-disable react/prop-types */
import User from "../components/User/User";
import SwitchToLogin from "../components/helpers/auth";

function UserPage({navigate , Token}) {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    SwitchToLogin(navigate)
    if (!isLoggedIn) return null
    return <User Token={Token}/>
}

export default UserPage