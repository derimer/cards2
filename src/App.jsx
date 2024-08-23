import React, { useState } from "react";
import CharacterSelection from "../src/components/CharacterSelection";
import AttributeSelection from "../src/components/AttributeSelection";
import HeroCard from "../src/components/HeroCards";
import barbarian from "./images/barbarian.webp";
import Paladin from "./images/Paladin.jpg";
import Fighter from "./images/Fitghter.jpg";
import Ranger from "./images/ranger.jpg";
import "./styles/fighter.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [attributes, setAttributes] = useState({
    strength: 0,
    endurance: 0,
    charism: 0,
    bonus: 2,
  });

  const characters = [
    { name: "BARBARIAN", image: barbarian },
    { name: "PALADIN", image: Paladin },
    { name: "FIGHTER", image: Fighter },
    { name: "RANGER", image: Ranger },
  ];

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    setAttributes({
      strength: 1,
      endurance: 1,
      charism: 1,
      bonus: 1,
    });
    setStep(2);
  };

  const handleAttributeChange = (attr) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attr]: prevAttributes[attr] + 1,
      bonus: prevAttributes.bonus - 1,
    }));
  };

  const handleStart = () => {
    setStep(3);
  };

  return (
    <div>
      {step === 1 && (
        <CharacterSelection
          characters={characters}
          onCharacterSelect={handleCharacterSelect}
        />
      )}
      {step === 2 && (
        <AttributeSelection
          character={selectedCharacter}
          attributes={attributes}
          onAttributeChange={handleAttributeChange}
          onStart={handleStart}
        />
      )}
      {step === 3 && (
        <HeroCard character={selectedCharacter} attributes={attributes} />
      )}
    </div>
  );
};

export default App;
