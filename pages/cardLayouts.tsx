import { useState, useRef, useEffect } from 'react';
import { NextPage } from 'next';

import Link from 'next/link';

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


const HomeGames: NextPage = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");

        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    // const containerRef = useRef<HTMLDivElement>(null);

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

    // const scrollContainer = (direction: 'left' | 'right') => {
    //     const container = containerRef.current;
    //     const scrollAmount = 300; // Adjust this value as needed
    //     if (container) {
    //         const currentScroll = container.scrollLeft;
    //         container.scrollLeft = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
    //     }
    //     console.log('pressed');
    // };

    return(
        <div className="flex flex-col items-center font-semibold text-3xl my-4">
            <p className='mb-8'>Select Game</p>
            <div className="flex flex-row justify-between items-center">
                <Link id='home-left' href="#eafc-btn" onClick={handleScroll} className="flex flex-row justify-center px-5 py-3 yellow-bg rounded-lg text-stone-800 text-3xl">
                    <FontAwesomeIcon icon={faCaretLeft} />
                </Link>
                <div className="home-container flex flex-row items-center space-x-4 mx-8">
                    <Link id="eafc-btn" href="#eafc24" className="mx-4 flex-shrink-0">
                        <Image className="homeCL rounded-lg" src={fc24CL} alt="EA FC 24" />
                    </Link>
                    <Link id="lol-btn" href="#lol" className="mx-4 flex-shrink-0">
                        <Image className="homeCL rounded-lg" src={lolCL} alt="League of Legends" />
                    </Link>
                    <Link id="valorant-btn" href="#valorant" className="mx-4 flex-shrink-0">
                        <Image className="activeCL homeCL rounded-lg" src={valorantCL} alt="Valorant" />
                    </Link>
                    <Link id="rl-btn" href="#rocketLeague" className="mx-4 flex-shrink-0">
                        <Image className="homeCL rounded-lg" src={rlCL} alt="Rocket League" />
                    </Link>
                    <Link id="cs2-btn" href="#counterStrike2" className="mx-4 flex-shrink-0">
                        <Image className="homeCL rounded-lg" src={cs2CL} alt="Counter-Strike 2" />
                    </Link>
                </div>
                <Link id='home-right' href="#cs2-btn" onClick={handleScroll} className="flex flex-row justify-center px-5 py-3 yellow-bg rounded-lg text-stone-800 text-3xl">
                    <FontAwesomeIcon icon={faCaretRight} />
                </Link>
            </div>
        </div>
    )
}

export default HomeGames;