import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Locations from './pages/Locations';
import FlightsPage from './pages/FlightBooking';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

// import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Locations" element={<Locations />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/flight" element={<FlightsPage/>}/>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
       
        {/* <Route path="*" element={<PageNotFound />} />  */}
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App