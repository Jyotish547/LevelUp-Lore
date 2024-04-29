// All Game Pages Layout

import NavBar from "../navBar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react';
import Formations from "./fc24/formations/page";
import "../globals.css";
import { Metadata } from "next";

export default function GamePageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {

  // const router = usePathname();

  // const gameName = router?.split('/')[2];

  // let title= gameName ? getTitleFromGame(gameName) : 'LevelUp Lore';

  // useEffect(() => {
  //   document.title = title;
  // }, [])
  
  return (
    <main className="m-0 p-0 game-background w-screen h-screen overflow-x-hidden">
      <div className="fixed z-0 inset-0 bg-black bg-opacity-75 w-screen h-screen"></div>
      <div className="relative z-10 py-10 flex flex-row items-start justify-start h-fit w-screen text-neutral-300">
        <NavBar />  
        <div className="w-full flex ml-64 xl:ml-72 px-8 xl:px-16">
          {children}
        </div>
      </div>
    </main>
  )
}

  // function getTitleFromGame(game: string): string {
  //   switch(game) {
  //     case 'fc24':
  //       return 'FC24 - LevelUp Lore';
  //     case 'leagueOfLegends':
  //       return 'League of Legends - LevelUp Lore';
  //     case 'valorant':
  //       return 'Valorant - LevelUp Lore';
  //     case 'rocketLeague':
  //       return 'Rocket League - LevelUp Lore';
  //     case 'counterStrike2':
  //       return 'Counter Strike 2 - LevelUp Lore';
  //     default:
  //       return 'LevelUp Lore';
  //   }
  // }