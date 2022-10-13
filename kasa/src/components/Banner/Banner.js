import * as React from "react";
import './Banner.css'
import logo from '../../assets/LogoRed.png'

function Banner() {
    return ( 
    <div className='lmj-banner'>
        <img src={logo} alt='Kasa' className='lmj-logo' />
        </div>
    )
}
export default Banner