// All Game Pages Layout

'use client'

import NavBar from "../navBar";
import React, { useState } from 'react';
import Formations from "./eafc24/formations";
import { FormationPage } from "./eafc24/formationPage";
import "../globals.css";

export default function GamePageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const [currentPage, setCurrentPage] = useState('formations');

    const handlePageChange = (pageName: string) => {
      setCurrentPage(pageName);
    }

    const id = 10 

    const callAPI = async () => {

        const res = await fetch(`/api/formations/${id}`);
        const data = await res.json();
        if(id === data.key) {
          console.log(data);
        }
        else {
          console.log("No content found for the ID.");
        }

    };
    callAPI()
    

    return (
      <main className="m-0 p-0 game-background w-screen h-screen overflow-x-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-60 w-screen h-max">
          <div className="p-16 flex flex-row items-start justify-between h-screen w-screen">
            <NavBar />  
            {currentPage === 'formations' && <Formations onPageChange={handlePageChange} />}
            {currentPage === 'formationPage' && <FormationPage />}
          </div>
        </div>
      </main>
    )
  }