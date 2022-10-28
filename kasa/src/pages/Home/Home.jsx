import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import banniereAccueil from "../../assets/img/Banniere.png";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card/Card";
import ListeLogements from "../../assets/api/logements.json";

function Home() {
    return(
        <div className="Accueil">
            <div className ="font-face-mtm">
            <Banner className="banner" image={banniereAccueil} texte="Chez vous, partout et ailleurs"/> </div>
            <div className ="font-face-mt">
            <div className="liste-logements">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
            </div>
        </div>
    );
}

export default Home;