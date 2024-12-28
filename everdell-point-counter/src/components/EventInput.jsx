import React, { useState } from 'react';

const EventInput = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');

  const handleAddEvent = () => {
    if (eventName) {
      onAddEvent(eventName);
      setEventName('');
    }
  };

  return (
    <div className="card-input-container">
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder="Enter event name"
      />
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
};

export default EventInput;
