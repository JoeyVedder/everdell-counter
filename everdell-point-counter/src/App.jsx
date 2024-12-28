import React, { useState } from 'react';
import CardInput from './components/CardInput';
import PointsDisplay from './components/PointsDisplay';
import EventInput from './components/EventInput';
import cardsData from './data/cards.json';

const App = () => {
  const [cards, setCards] = useState([]);
  const [events, setEvents] = useState([]);

  const addCard = (cardName) => {
    const card = cardsData.find((c) => c.name.toLowerCase() === cardName.toLowerCase());
    if (card && !cards.includes(cardName)) {
      setCards([...cards, cardName]);
    }
  };

  const addEvent = (eventName) => {
    const event = cardsData.find((e) => e.name.toLowerCase() === eventName.toLowerCase() && e.type === 'event');
    if (event && !events.includes(eventName)) {
      setEvents([...events, eventName]);
    }
  };

  const calculatePoints = () => {
    let totalPoints = 0;
    let specialEventPoints = 0;

    cards.forEach((cardName) => {
      const card = cardsData.find((c) => c.name === cardName);
      totalPoints += card ? card.points : 0;

      if (card && card.specialAbility === 'unique') {
        totalPoints += 1;
      }
    });

    events.forEach((eventName) => {
      const event = cardsData.find((e) => e.name === eventName && e.type === 'event');
      specialEventPoints += event ? event.eventPoints : 0;
    });

    return { totalPoints, specialEventPoints };
  };

  const { totalPoints, specialEventPoints } = calculatePoints();

  return (
    <div>
      <h1>Everdell Point Counter</h1>
      <CardInput onAddCard={addCard} />
      <EventInput onAddEvent={addEvent} />
      <PointsDisplay totalPoints={totalPoints} specialEventPoints={specialEventPoints} />
    </div>
  );
};

export default App;
