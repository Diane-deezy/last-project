import React from "react";
import "./Header.css";
import logoHeader from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
            <div className ="font-face-mt">
                <NavLink to="/" className="lien-site" style={() => window.location.pathname === "/" ? {borderBottom: "1px solid #ff6060"} : { borderBottom: "none" }}>Accueil</NavLink>
                <NavLink to="/a-propos" className="lien-site" style={() => window.location.pathname === "/a-propos"  ? {borderBottom: "1px solid #ff6060"} : { borderBottom: "none" }}>À propos</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;