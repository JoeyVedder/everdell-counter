import React, { useState } from 'react';

const CardInput = ({ onAddCard }) => {
  const [cardName, setCardName] = useState('');

  const handleAddCard = () => {
    if (cardName) {
      onAddCard(cardName);
      setCardName('');
    }
  };

  return (
    <div className="card-input-container">
      <input
        type="text"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        placeholder="Enter card name"
      />
      <button onClick={handleAddCard}>Add Card</button>
    </div>
  );
};

export default CardInput;
