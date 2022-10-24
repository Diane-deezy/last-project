import * as React from "react";
import './Banner.css'
import logo from '../../assets/LogoRed.png'

function Banner() {
    return ( 
    <header className='lmj-banner'>
    <a href="#">
        <img src={logo} alt='Kasa' className='lmj-logo' />
        </a>
    <nav className='navbar'>
      <div className="navli">
            <a href="#" className="nav">Accueil</a>
          </div>
      <div className="navli">
            <a href="#" className="nav" to="/about">À propos</a>
          </div>    
    </nav>
  </header>
    )
}
export default Banner