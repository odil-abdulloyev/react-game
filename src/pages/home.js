import React from 'react';
import GameField from '../components/game-field/game-field';
import shuffleArray from '../utils/shuffle-array';
import buildArray from '../utils/build-array';
import emojis from '../emojis';

export default function Home() {
  return (
    <main className='main'>
      <div className='container'>
        <GameField emojis={shuffleArray(buildArray(emojis, 16))} />
      </div>
    </main>
  );
}
