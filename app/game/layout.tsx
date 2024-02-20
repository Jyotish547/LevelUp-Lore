// All Game Pages Layout

import NavBar from "../navBar";
import "../globals.css";

export default function GamePageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="game-background w-screen h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="mx-16 flex flex-row items-center justify-between h-screen w-auto">
            <NavBar />  
            {children}
          </div>
        </div>
      </main>
    )
  }