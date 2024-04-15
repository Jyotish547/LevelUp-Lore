'use client'
import React, { useState } from 'react';
import { HomeGames } from './components/cardLayouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUserPlus, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faUserPlus, faPuzzlePiece);

type HomeBackgrounds = {
    [key: string]: string; // This line allows dynamic keys of type string
  };

// Object mapping game names to image URL strings
const homeBackgrounds: HomeBackgrounds = {
  Valorant: '/assets/homePage/backgrounds/Valorant.jpg',
  LeagueOfLegends: '/assets/homePage/backgrounds/LeagueOfLegends.jpg',
  RocketLeague: '/assets/homePage/backgrounds/RocketLeague.jpg',
  EAFC24: '/assets/homePage/backgrounds/EAFC24.jpg',
  CounterStrike2: '/assets/homePage/backgrounds/Counter-Strike2.jpg',
  // Add other games and their background image paths here
};

export default function HomePage() {
  const [selectedGame, setSelectedGame] = useState('Valorant');

  // Access the URL string directly from the state
  const backgroundHome = homeBackgrounds[selectedGame];

  // API Call example code

  // const id = 10 

  // const callAPI = async () => {
 
  //       const res = await fetch(`/api/people/${id}`);
  //       const data = await res.json();
  //       if(id === data.key) {
  //         console.log(data);
  //       }
  //       else {
  //         console.log("No content found for the ID.");
  //       }
 
  // };
  // callAPI()

  const handleGameChange = (game: string) => {
    setSelectedGame(game);
  }

  return (
    <main className="relative h-screen m-0 p-0 bg-cover background-transition text-white" style={{ backgroundImage: `url(${backgroundHome})` }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-row items-center">
        <div className='flex flex-col items-center justify-around w-screen h-screen'>
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl font-bold my-6'>
                    LevelUp Lore
                </h1>
                <p className='text-xl w-3/4 text-center'>
                    Welcome to LevelUp Lore, your ultimate gateway to the universe of gaming! Dive into a meticulously curated collection of game guides, strategies, and lineups, all designed to elevate your gameplay.
                </p>
            </div>
            
            <HomeGames onGameChange = {handleGameChange} />
            <div className='flex flex-col items-center text-xl'>
                <p className='mb-6'>Ready to level up? Join us or sign in to start your adventure.</p>
                <div className='flex flex-row justify-between w-7/12'>
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
