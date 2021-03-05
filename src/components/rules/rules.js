import React from 'react';
import './rules.scss';

export default function Rules() {
  return (
    <div className='rules'>
      <h1 className='rules-title'>Rules</h1>
      <ol className='list-group'>
        <li className='list-group-item'>The objective is to collect the most pairs of cards.</li>
        <li className='list-group-item'>
          Shuffle the cards and lay them on the table, face down, in rows.
        </li>
        <li className='list-group-item'>
          The youngest player goes first. Play then continues in a clockwise direction.
        </li>
        <li className='list-group-item'>
          On each turn, a player turns over any two cards (one at a time) and keeps them if the
          cards match (for instance, two kings)
        </li>
        <li className='list-group-item'>
          If they successfully match a pair they get to keep the cards, and that player gets another
          turn.
        </li>
        <li className='list-group-item'>
          When a player turns over two cards that do not match, those cards are turned face down
          again (in the same position) and it becomes the next player’s turn.
        </li>
        <li className='list-group-item'>The trick is to remember which cards are where.</li>
        <li className='list-group-item'>
          The person with the most pairs at the end of the game wins.
        </li>
      </ol>
    </div>
  );
}
