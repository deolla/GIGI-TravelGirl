/* eslint-disable react/prop-types */
import Locations from '../components/Locations/Locations';
import SwitchToLogin from '../components/helpers/auth';

function Location({navigate}) {

  const isLoggedIn = localStorage.getItem('isLoggedIn')
  SwitchToLogin(navigate)
  if (!isLoggedIn) return null
  return (
    <div className='pt-14'>
      <Locations />
    </div>
  )
}

export default Location