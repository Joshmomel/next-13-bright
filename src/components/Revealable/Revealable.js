'use client';
import React from 'react';

function Revealable({ children }) {
  const [isRevealed, setIsRevealed] =
    React.useState(false);

  console.log('** render Revealable with isRevealed =', isRevealed);
  return isRevealed ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => {
        console.log('** onClick setIsRevealed **')
        setIsRevealed(true)
      }}>
        Reveal Content
      </button>
    </div>
  );
}

export default Revealable;
