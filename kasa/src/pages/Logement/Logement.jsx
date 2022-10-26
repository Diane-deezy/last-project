import React from "react";
import "./Logement.css";
import { useParams, Navigate } from 'react-router-dom';
import ListeLogements from "../../assets/api/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Etoile from "../../assets/img/Etoile.png";
import EtoileVide from "../../assets/img/EtoileVide.png";
import Dropdown from "../../components/Dropdown/Dropdown";

function Logement() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const ficheLogement = ListeLogements.find(logement => logement.id === id.id);

    /* Notes */
    const starsArray = [1, 2, 3, 4, 5];

    return(
        <>
            {
                ficheLogement ? (
                    <div className="Fiche">
                        <Slideshow images={ficheLogement?.pictures}/>
                        <div className="logements-propietaire">
                            <div className="information-logements">
                                <span className="titre-logement">{ficheLogement?.title}</span>
                                <span className="endroit-logement">{ficheLogement?.location}</span>
                                <div className="tags">
                                <ul className="tagsList">{ficheLogement?.tags.map((tagsItem, index) => 
                                (<li className="tagsItems"> {tagsItem} </li>
                                ))}
                                </ul>
                                </div>
                            </div>
                            <div className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{ficheLogement?.host.name}</span>
                                    <img className="photo-propietaire" src={ficheLogement?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                {starsArray.map((index) => (
                <img
                  alt="Nombre d'étoiles pour évaluer la qualité du logement"
                  className="star"
                  key={index}
                  src={index <= ficheLogement?.rating ? Etoile : EtoileVide}
                />
              ))}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <Dropdown titre="Description" description={ficheLogement?.description}/>
                            <ul class= "equipements">{ficheLogement?.equipments.map((cardItem, index) => (
                  <li>{cardItem} </li>
                ))}</ul>
                        </div>
                    </div>
                ) : <Navigate replace to="/*"/>
            }
        </>
    )
}

export default Logement;