import React from "react";
import "../styles/fighter.css";

const AttributeSelection = ({
  character,
  attributes,
  onAttributeChange,
  onStart,
}) => {
  const handleIncrement = (attribute) => {
    if (attributes.bonus > 0) {
      onAttributeChange(attribute, +1); // Passe +1 pour incrémenter
    }
  };

  // Fonction pour gérer la décrémentation
  const handleDecrement = (attribute) => {
    if (attributes[attribute] > 0) {
      onAttributeChange(attribute, -1); // Passe -1 pour décrémenter
    }
  };

  return (
    <div className="action">
      <h2>Hero Card Generator</h2>
      <img
        className="character-card "
        src={character.image}
        alt={character.name}
      />
      <p>You are {character.name}</p>
      <div className="etatForce">
        <label>Strength</label>
        <button onClick={() => handleDecrement("strength")}>-</button>

        <button onClick={() => handleIncrement("strength")}>+</button>

        <span>{attributes.strength}</span>
        <br />
        <br />
        <label>Endurance</label>
        <button onClick={() => handleDecrement("endurance")}>-</button>

        <button onClick={() => handleIncrement("endurance")}>+</button>

        <span>{attributes.endurance}</span>
        <br />
        <br />
        <label>Charism</label>
        <button onClick={() => handleDecrement("charism")}> -</button>

        <button onClick={() => handleIncrement("charism")}>+</button>

        <span>{attributes.charism}</span>
      </div>

      <button onClick={onStart}>Start!</button>
    </div>
  );
};
export default AttributeSelection;
