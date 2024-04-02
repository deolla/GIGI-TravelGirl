import LoginForm from "../components/Authentication/LoginForm";


// eslint-disable-next-line react/prop-types
function LoginPage({isLoggedIn, setLoggedIn, setToken}){
    return <LoginForm isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setToken={setToken}/>
}

export default LoginPage;