import LoginForm from "../components/Authentication/LoginForm";
// import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
function LoginPage({isLoggedIn, setLoggedIn, setToken}){
    return <LoginForm isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setToken={setToken}/>
}

export default LoginPage;