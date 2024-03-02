// All Game Pages Layout

import NavBar from "../navBar";
import "../globals.css";

export default function GamePageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

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
      <main className="game-background w-screen h-screen overflow-x-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-60 w-screen h-screen">
          <div className="p-16 flex flex-row items-start justify-between h-screen w-auto">
            <NavBar />  
            {children}
          </div>
        </div>
      </main>
    )
  }