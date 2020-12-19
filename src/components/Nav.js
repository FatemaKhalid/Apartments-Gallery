import React from 'react'
import style from "../styles/nav.scss";

function Nav() {
  return (
    <header className='navbar'>
      <div className='navbar__title navbar__item'>Cutco</div>
      <div className='navbar__item'>About Us</div>
      <div className='navbar__item'>Contact</div>
      <div className='navbar__item'>Help</div>        
  </header>
  )
}

export default Nav
