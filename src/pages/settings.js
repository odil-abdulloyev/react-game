import React from 'react';
import Control from '../components/control/control';
import GameManager from '../game-manager';

export default function Settings() {
  return (
    <main className='pt-4'>
      <div className='container'>
        <h1 className='text-center'>Settings</h1>
        <Control gameManager={GameManager} />
      </div>
    </main>
  );
}
