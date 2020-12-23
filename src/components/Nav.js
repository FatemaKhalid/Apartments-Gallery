import React from 'react'
import "../styles/nav.scss";

function Nav() {
  return (
    <nav className='navbar'>
      <div className='navbar__title navbar__item'>Cutco</div>
      <div className='navbar__item'>About Us</div>
      <div className='navbar__item'>Contact</div>
      <div className='navbar__item'>Help</div>        
  </nav>
  )
}

export default Nav
