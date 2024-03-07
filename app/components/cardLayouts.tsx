import React, { useState, useRef, useEffect } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import axios from 'axios';

import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft, faCaretRight, faPuzzlePiece, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
// Images
import valorantCL from '../../public/assets/homePage/cardImages/Valorant.jpeg';
import fc24CL from '../../public/assets/homePage/cardImages/FC24.jpg';
import lolCL from '../../public/assets/homePage/cardImages/League of Legends.jpeg';
import rlCL from '../../public/assets/homePage/cardImages/Rocket League.jpeg';
import cs2CL from '../../public/assets/homePage/cardImages/CS2.jpg';

// Logos

import valorantLogo from '../../public/assets/logos/Valorant.png';
import lolLogo from '../../public/assets/logos/League of Legends.png';
import fc24Logo from '../../public/assets/logos/EA FC24.png';
import rlLogo from '../../public/assets/logos/Rocket League.png';
import cs2Logo from '../../public/assets/logos/Counter-Strike 2.png';

library.add(faCaretLeft, faCaretRight, faPuzzlePiece, faPeopleGroup);

const games = [
    {src: fc24CL, alt: 'EAFC24', logo: fc24Logo, shadowColor: 'rgb(22 163 74)'},
    {src: lolCL, alt: 'LeagueOfLegends', logo: lolLogo, shadowColor: 'rgb(37 99 235)'},
    {src: valorantCL, alt: 'Valorant', logo: valorantLogo, shadowColor: 'rgb(126 34 206)'},
    {src: rlCL, alt: 'RocketLeague', logo: rlLogo, shadowColor: 'rgb(234 88 12)'},
    {src: cs2CL, alt: 'CounterStrike2', logo: cs2Logo, shadowColor: 'rgb(250 204 21)'},
]

interface HomeGameProps {
    onGameChange: (game:string) => void;
}

export const HomeGames: NextPage<HomeGameProps> = ({onGameChange}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null); // Ref for the container

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % games.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        scrollToActiveCard();
    }, [activeIndex]);

    const scrollToActiveCard = () => {
        const activeCard = cardRefs.current[activeIndex];
        const container = containerRef.current;

        if (activeCard && container) {
            const { offsetLeft, clientWidth } = activeCard;
            const { scrollLeft, clientWidth: containerWidth } = container;

            const cardLeft = offsetLeft - container.offsetLeft;
            const cardRight = cardLeft + clientWidth;

            if (cardLeft < scrollLeft || cardRight > (scrollLeft + containerWidth)) {
                container.scrollTo({
                    left: cardLeft - (containerWidth / 2 - clientWidth / 2),
                    behavior: 'smooth',
                });
            }
        }
    };

    const handleLeftScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setActiveIndex(prevIndex => prevIndex === 0 ? games.length - 1 : prevIndex - 1);
    };

    const handleRightScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setActiveIndex(prevIndex => (prevIndex + 1) % games.length);
    };

    useEffect(() => {
        const gameName = games[activeIndex].alt;
        onGameChange(gameName);
    }, [activeIndex, onGameChange])

    return (
        <div className="flex flex-col items-center font-semibold text-3xl">
            <div className="flex flex-row justify-between items-center w-1/2 mb-8 border-y-2 py-8 yellow-border">
                <Link href="#" onClick={handleLeftScroll} className="flex flex-row justify-center px-5 py-3 yellow-bg rounded-lg text-stone-800 text-3xl">
                    <FontAwesomeIcon icon={faCaretLeft} />
                </Link>
                <p className='text-4xl font-semibold flex flex-row items-center'> <FontAwesomeIcon icon={faPuzzlePiece} className='mr-4 yellow-text' /> <span>Select Game</span> </p>
                <Link href="#" onClick={handleRightScroll} className="flex flex-row justify-center px-5 py-3 yellow-bg rounded-lg text-stone-800 text-3xl">
                    <FontAwesomeIcon icon={faCaretRight} />
                </Link>
            </div>
            <div ref={containerRef} className="home-container flex flex-row items-center space-x-4 mx-8 overflow-x-auto">
                {games.map((game, index) => (
                    <Link key={index} ref={el => cardRefs.current[index] = el} href="/game" className={`flex flex-col items-center flex-shrink-0 rounded-lg space-y-8`}>
                        <Image className={`rounded-lg homeCL ${index === activeIndex ? 'activeCL' : ''}`} src={game.src} alt={game.alt} style={{ boxShadow: `3px 3px 8px ${game.shadowColor}`}}/>
                        <Image className={`${index === activeIndex ? 'block' : 'hidden'}`} src={game.logo} alt={game.alt} width={300} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

// EAFC 24 Formations Card Layout

import { TypeTags, DifficultyTags } from './tags';
import { useRouter } from 'next/navigation';
import { SingleFormationData as FormationData } from '@/components/pages/api/formationDetailsByID/[id]';

// interface FormationsEAFCProps {
//     onPageChange: (pageName: string) => void;
// }

export const FormationsEAFC: React.FC = () => {
    const router = useRouter();

    const [formationData, setFormationData] = useState<FormationData[]>([]);

    useEffect(() => {
        if (router) {
            const fetchFormationData = async () => {
                try {
                    const response = await axios.get<{content: FormationData[]}, any>(`http://localhost:3000/api/allFormations/allFormations`);
                    setFormationData(response.data[0].content);
                } catch(error) {
                    console.error('Error fetching formation data:', error);
                }
            };
            fetchFormationData();
        }
    }, [router]);
    

    const goToFormation = (formation: string) => {
        if(router) {
            router.push(`/game/${formation}`);
        }
    };

    if(!formationData) return <div>Waiting... </div>;

    // goToFormation(formation.formation)
    // onPageChange(`/api/eafc24/formations`)

    return formationData.map((formation, index) => (
        <div key={index} onClick={() =>goToFormation(formation.formation)} className='w-11/12 py-4 px-5 bg-black space-y-3 flex flex-col items-start justify-between rounded-lg shadow-md shadow-green-300/30'>
            <Image src={formation.image} alt={formation.formation} className='w-full rounded-md' />
            <div className='flex flex-col items-start'>
                <span className='text-sm text-eafc'>Formation</span>
                <span className='text-xl font-semibold tracking-wider'>{formation.formation}</span>
            </div>
            <p className='text-base'>{formation.caption}</p>
            <div className='flex flex-row justify-between w-full font-semibold text-sm'>
                <TypeTags label={formation.flow} bgColor="bg-eafc" textColor="text-dark" borderColor='' border="" />
                <DifficultyTags level={formation.difficulty} />
            </div>
        </div>
    ))
}

export {valorantLogo, fc24Logo, lolLogo, rlLogo, cs2Logo};