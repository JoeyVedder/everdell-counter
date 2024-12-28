import React from 'react';

const PointsDisplay = ({ totalPoints, specialEventPoints }) => {
    return (
        <div className='points-display'>
            <h2>Total Points:</h2>
            <p>Card Points: {totalPoints}</p>
            <p>Even Points: {specialEventPoints}</p>
            <h3>Grand Total: {totalPoints + specialEventPoints}</h3>
        </div>
    );
};

export default PointsDisplay;