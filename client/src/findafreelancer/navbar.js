import React , { useContext }  from 'react'
import AuthContext from '../stores/AuthContext';
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar= () => {

  //   const { logout } = useContext(AuthContext);

  // const logoutHandler = () => {
  //       logout().then(() => {
  //           console.log('Logout Successful');
  //       }).catch(err => {
  //           console.log(err);
  //       })
  //   }
  return (
    <div className='navbar'>
      <div> TRUSTLANCER

      </div>
      <div>
        
        <Link to="/become">Become a freelancer</Link>
      </div>
      {/* <button onClick={logoutHandler}>Logout</button>
         */}
    </div>
  )
}

export default Navbar
