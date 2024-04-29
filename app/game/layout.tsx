// All Game Pages Layout

'use client'

import NavBar from "../navBar";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import Formations from "./fc24/formations/page";
//import FormationPage from "../../eafc24/formationPage";
import "../globals.css";

export default function GamePageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const [currentPage, setCurrentPage] = useState('formations');

    const handlePageChange = (pageName: string) => {
      setCurrentPage(pageName);
      const filename = window.location.pathname.split('/').pop();

      console.log(filename);
    }

    // const id = 10 

    // const callAPI = async () => {

    //     const res = await fetch(`/api/eafc24/formations`);
    //     const data = await res.json();
    //     if(data) {
    //       console.log(data);
    //     }
    //     else {
    //       console.log("No content found for the ID.");
    //     }

    // };
    // callAPI()
    

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