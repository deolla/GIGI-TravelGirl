import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Locations from './pages/Locations';
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
        {/* <Route path="*" element={<PageNotFound />} /> */}
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App