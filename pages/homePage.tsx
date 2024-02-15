import React, { useState } from 'react';
import HomeGames from './cardLayouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faUserPlus);

type HomeBackgrounds = {
    [key: string]: string; // This line allows dynamic keys of type string
  };

// Object mapping game names to image URL strings
const homeBackgrounds: HomeBackgrounds = {
  Valorant: '/assets/homePage/backgrounds/Valorant.jpg',
  // Add other games and their background image paths here
};

export default function HomePage() {
  const [selectedGame, setSelectedGame] = useState('Valorant');

  // Access the URL string directly from the state
  const backgroundHome = homeBackgrounds[selectedGame] || homeBackgrounds['Valorant'];

  return (
    <main className="relative h-screen bg-cover" style={{ backgroundImage: `url(${backgroundHome})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-row items-center">
        <div className='flex flex-col items-center justify-around w-screen h-3/4'>
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl font-bold my-6'>
                    LevelUp Lore
                </h1>
                <p className='text-lg w-3/4 text-center'>
                    Welcome to LevelUp Lore, your ultimate gateway to the universe of gaming! Dive into a meticulously curated collection of game guides, strategies, and lineups, all designed to elevate your gameplay.
                </p>
            </div>
            <HomeGames />
            <div className='flex flex-col items-center'>
                <p className='text-lg mb-4'>Ready to level up? Join us or sign in to start your adventure.</p>
                <div className='flex flex-row justify-between w-1/2'>
                    <button className='yellow-bg text-dark px-4 py-3 rounded-md font-semibold'>
                        <FontAwesomeIcon icon={faUser} className='mr-2' /> Login
                    </button>
                    <button className='border-white border-2 text-white px-4 py-3 rounded-md font-semibold'>
                        <FontAwesomeIcon icon={faUserPlus} className='mr-2' /> Register
                    </button>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
