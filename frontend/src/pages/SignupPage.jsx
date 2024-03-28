import SignupForm from "../components/Authentication/SignupForm";
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react"

function SignupPage({isLoggedIn}) {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate('/login')
    //     } 
    // }, [isLoggedIn,navigate])
    // if (!isLoggedIn) return null
    return <SignupForm />
}

export default SignupPage;