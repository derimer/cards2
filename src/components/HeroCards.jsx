import React from "react";
import "../styles/fighter.css";
const HeroCard = ({ character, attributes }) => {
  return (
    <div className="force">
      <img
        className="character-card "
        src={character.image}
        alt={character.name}
      />
      <h2>{character.name}</h2>
      <p>Strength: {attributes.strength}</p>
      <p>Endurance: {attributes.endurance}</p>
      <p>Charism: {attributes.charism}</p>
    </div>
  );
};

export default HeroCard;
