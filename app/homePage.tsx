'use client'
import React, { useState } from 'react';
import { HomeGames } from './components/cardLayouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUserPlus, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

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

import { motion } from 'framer-motion';
import { upHome, downHome, pageList, appear } from './components/animations';

import { logos } from './components/infoDesign';
import Head from 'next/head';

import RootLayout from './layout';

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
    <>
      <Head>
          <title>LevelUp Lore</title>
          {/* Add any other meta tags or links here */}
      </Head>
      <motion.main className="relative h-screen m-0 p-0 bg-cover background-transition text-white" style={{ backgroundImage: `url(${backgroundHome})` }}
        
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-85 flex flex-row items-center">
          <div className='flex flex-col items-center justify-evenly w-screen h-screen'>
              <motion.div className='flex flex-col items-center space-y-8 xl:space-y-4'
                variants={upHome}
                initial="hidden"
                animate="visible"
                >
                  <Image src={logos.white} alt="LevelUp Lore" width={250} />
                  <p className='text-md lg:text-lg w-3/4 text-center'>
                      Welcome to LevelUp Lore, your ultimate gateway to the universe of gaming! Dive into a meticulously curated collection of game guides, strategies, and lineups, all designed to elevate your gameplay.
                  </p>
              </motion.div>
              <motion.div className='w-fit'
                variants={appear}
                initial="hidden"
                animate="visible"
              >
                <HomeGames onGameChange = {handleGameChange} />
              </motion.div>
              
              <motion.div className='flex flex-col items-center text-xl'
                variants={downHome}
                initial="hidden"
                animate="visible"
              >
                  <p className='text-md lg:text-lg mb-6'>Ready to level up? Join us or sign in to start your adventure.</p>
                  <div className='flex flex-row justify-between w-7/12'>
                      <button className='bg-teal-500 text-dark px-4 py-3 rounded-sm font-semibold hoverButton'>
                          <FontAwesomeIcon icon={faUser} className='mr-2' /> Login
                      </button>
                      <button className='border-teal-500 border-2 text-teal-500 px-4 py-3 rounded-sm font-semibold hoverStrokeButton'>
                          <FontAwesomeIcon icon={faUserPlus} className='mr-2' /> Register
                      </button>
                  </div>
              </motion.div>
          </div>
        </div>
      </motion.main>
    </>
  );
}
