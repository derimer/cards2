import React from "react";
import "../styles/fighter.css";

const AttributeSelection = ({
  character,
  attributes,
  onAttributeChange,
  onStart,
}) => {
  const handleIncrement = (attribute) => {
    attributes.bonus >= 0;
    {
      onAttributeChange(attribute, +1); // Passe +1 pour incrémenter
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
      <div className="EtatForce">
        <h3>Strength</h3>

        <button onClick={() => handleIncrement("strength")}>+</button>

        {attributes.strength}

        <h3>Endurance</h3>
        <button onClick={() => handleIncrement("endurance")}>+</button>

        {attributes.endurance}
        <h3>Charism</h3>

        <button onClick={() => handleIncrement("charism")}>+</button>

        {attributes.charism}
      </div>

      <button onClick={onStart}>Start!</button>
    </div>
  );
};
export default AttributeSelection;
