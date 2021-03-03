import React from 'react';

export default function ScoreBox({ score, turns }) {
  return (
    <div className='border p-1 mb-2 fs-4 d-flex justify-content-between text-secondary'>
      <div className='score'>
        <span>Score: </span>
        <span>{score}</span>
      </div>
      <div className='moves'>
        <span>Turns: </span>
        <span>{turns}</span>
      </div>
    </div>
  );
}
