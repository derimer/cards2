const CharacterSelection = ({ characters, onCharacterSelect }) => {
  return (
    <div>
      <h2>Hero Card Generator</h2>
      <p>You are ________</p>
      <div className="characters">
        {characters.map((character, index) => (
          <div key={index} onClick={() => onCharacterSelect(character)}>
            <img
              className="character-card"
              src={character.image}
              alt={character.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;
