import { useState, useRef, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
// Images
import valorantCL from '../public/assets/homePage/cardImages/Valorant.jpeg';
import fc24CL from '../public/assets/homePage/cardImages/FC24.jpg';
import lolCL from '../public/assets/homePage/cardImages/League of Legends.jpeg';
import rlCL from '../public/assets/homePage/cardImages/Rocket League.jpeg';
import cs2CL from '../public/assets/homePage/cardImages/CS2.jpg';

library.add(faCaretLeft, faCaretRight);


export default function HomeGames() {
    const containerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     if(container) {
    //         const activeElement = container.querySelector('.activeCL') as HTMLElement | null;
    //         if(container && activeElement) {
    //             const containerWidth = container.offsetWidth;
    //             const activeElementOffset = activeElement.offsetLeft + activeElement.offsetWidth /2;
    //             const scrollLeft = activeElementOffset - containerWidth / 2;
    //             container.scrollLeft = scrollLeft;
    //         }
            
    //     }
        
    // }, []);

    const scrollContainer = (direction: 'left' | 'right') => {
        const container = containerRef.current;
        const scrollAmount = 100; // Adjust this value as needed
        if (container) {
            const currentScroll = container.scrollLeft;
            container.scrollLeft = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
        }
        console.log('pressed');
    };

    return(
        <div className="flex flex-col items-center font-semibold text-3xl my-4">
            <p className='mb-8'>Select Game</p>
            <div className="flex flex-row justify-between items-center">
                <button id='home-left' onClick={() => scrollContainer('left')} className="flex flex-row justify-center px-5 py-3 yellow-bg rounded-lg text-stone-800 text-3xl">
                    <FontAwesomeIcon icon={faCaretLeft} />
                </button>
                <div className="home-container flex flex-row items-center space-x-4">
                    <a className="mx-4 flex-shrink-0">
                        <Image className="homeCL rounded-lg" src={fc24CL} alt="EA FC 24" />
                    </a>
                    <a className="mx-4 flex-shrink-0">
                        <Image className="homeCL rounded-lg" src={lolCL} alt="League of Legends" />
                    </a>
                    <a className="mx-4 flex-shrink-0">
                        <Image className="homeCL rounded-lg" src={valorantCL} alt="Valorant" />
                    </a>
                    <a className="mx-4 flex-shrink-0">
                        <Image className="homeCL rounded-lg" src={rlCL} alt="Rocket League" />
                    </a>
                    <a className="mx-4 flex-shrink-0">
                        <Image className="homeCL rounded-lg" src={cs2CL} alt="Counter-Strike 2" />
                    </a>
                </div>
                <button id='home-right' onClick={() => scrollContainer('right')} className="flex flex-row justify-center px-5 py-3 yellow-bg rounded-lg text-stone-800 text-3xl">
                    <FontAwesomeIcon icon={faCaretRight} />
                </button>
            </div>
        </div>
    )
}