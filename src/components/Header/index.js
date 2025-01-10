import React from 'react'
import "./style.css"
const Header = () => {
  function logoutFnc(){
    alert("logout!");
  }
  return (
    <div className='navbar'>
      <p className='logo'>Pennypath.</p>
      <p className='logo link' onClick={logoutFnc}>Logout</p>
    </div>
  )
}
 
export default Header
