import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import banniereAccueil from "../../assets/img/Banniere.png";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card/Card";
import ListeLogements from "../../assets/api/logements.json";

function Accueil() {
    return(
        <div className="Accueil">
            <Banner image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <div className="liste-logements">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
        </div>
    );
}

export default Accueil;