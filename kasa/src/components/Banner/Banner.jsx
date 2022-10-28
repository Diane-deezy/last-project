import React from "react";
import "./Banner.css";

function Banner({image, texte, className}) {
    return(
        <div className={className}>
            <img className="banner-img" src={image} alt="Banner"/>
            <div className="banner-sombre"></div>
            <span className="banner-txt">{texte}</span>
        </div>
    );
}

export default Banner;