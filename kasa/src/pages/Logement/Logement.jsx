import React from "react";
import "./Logement.css";
import {useParams, Navigate} from 'react-router-dom';
import listeLogements from "../../assets/api/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Etoile from "../../assets/img/Etoile.png";
import EtoileVide from "../../assets/img/EtoileVide.png";
import Dropdown from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";

function Logement() {
  const id = useParams();
  const starsArray = [1, 2, 3, 4, 5];
  const found = listeLogements.find(place => place.id === id.id);
  if (!found) {
    return <Navigate replace to="/404"/>
  }
    return (
                    <div className="Fiche">
                        <Slideshow images={found.pictures}/>
                        <div className="logements-propietaire">
                            <div className="information-logements">
                                <span className="titre-logement">{found.title}</span>
                                <span className="endroit-logement">{found.location}</span>
                                <div className="tags">
                                <ul className="tagsList">{found.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />})} </ul>
                                </div>
                            </div>
                            <div className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{found.host.name}</span>
                                    <img className="photo-propietaire" src={found.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                {starsArray.map((index) => (
                <img
                  alt="Nombre d'étoiles pour évaluer la qualité du logement"
                  className="star"
                  key={index}
                  src={index <= found.rating ? Etoile : EtoileVide}
                />
              ))}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <Dropdown titre="Description" content={found.description}/>
                            <Dropdown titre="Équipements" class= "equipements" content={found.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })}/>
                        </div>
                    </div>
                )
              }

export default Logement;