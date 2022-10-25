import React from "react";
import "./Banner.css";

function Banner({image, texte}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="Banner"/>
            <div className="banner-sombre"></div>
            <span className="banner-txt">{texte}</span>
        </div>
    );
}

export default Banner;