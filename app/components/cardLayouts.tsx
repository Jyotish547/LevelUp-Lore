import React, { useState, useRef, useEffect } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import axios from 'axios';

import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft, faCaretRight, faPuzzlePiece, faPeopleGroup, faEllipsisH, faPlusCircle, faCircleChevronRight, faAngleRight, faStar, faHeart, faShareNodes, faShieldHalved, faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

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

export {valorantLogo, fc24Logo, lolLogo, rlLogo, cs2Logo};

library.add(faCaretLeft, faCaretRight, faPuzzlePiece, faPeopleGroup);

const games = [
    {src: fc24CL, alt: 'EAFC24', logo: fc24Logo, shadowColor: 'rgb(22 163 74)', href: '/game/fc24/formations'},
    {src: lolCL, alt: 'LeagueOfLegends', logo: lolLogo, shadowColor: 'rgb(37 99 235)', href: '/game/fc24/formations'},
    {src: valorantCL, alt: 'Valorant', logo: valorantLogo, shadowColor: 'rgb(126 34 206)', href: '/game/valorant/agents'},
    {src: rlCL, alt: 'RocketLeague', logo: rlLogo, shadowColor: 'rgb(234 88 12)', href: '/game/fc24/formations'},
    {src: cs2CL, alt: 'CounterStrike2', logo: cs2Logo, shadowColor: 'rgb(250 204 21)', href: '/game/fc24/formations'},
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

    useEffect(() => {
        scrollToActiveCard();
    }, [activeIndex, scrollToActiveCard]);

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
                    <Link key={index} ref={el => cardRefs.current[index] = el} href={game.href} className={`flex flex-col items-center flex-shrink-0 rounded-lg space-y-8`}>
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
import { SingleFormationData as FormationData } from '@/components/pages/api/allFormations';

// interface FormationsEAFCProps {
//     onPageChange: (pageName: string) => void;
// }

import { FormType, DiffType } from "./types/fc24Type";

export const FormationsEAFC: React.FC<{ formationData: FormationData[], setFormationData: React.Dispatch<React.SetStateAction<FormationData[]>> }> = ({ formationData, setFormationData }) => {
    const router = useRouter();

    useEffect(() => {
            const fetchFormationData = async () => {
                try {
                    const response = await axios.get<{content: FormationData[]}, any>(`/api/allFormations`);
                    setFormationData(response.data[0].content);
                } catch(error) {
                    console.error('Error fetching formation data:', error);
                }
            };
            fetchFormationData();
    });

    // Navigation to Formation Details Page
    

    const goToFormation = (formation: string) => {
        if(router) {
            router.push(`/game/fc24/formations/${formation}`);
        }
    };

    if(!formationData) return <div>Waiting... </div>;

    // goToFormation(formation.formation)
    // onPageChange(`/api/eafc24/formations`)

    function getBackgroundClass(flow: string): string {
        switch (flow) {
            case 'Balanced':
                return 'bg-balanced';
            case 'Offensive':
                return 'bg-offensive';
            case 'Defensive':
                return 'bg-defensive';
            default:
                return '';
        }
    }

    return formationData.map((formation, index) => (
        <div key={index} onClick={() =>goToFormation(formation.formation)} className='w-11/12 py-4 px-5 bg-black space-y-3 flex flex-col items-start justify-between rounded-lg shadow-md shadow-green-300/30'>
            <Image src={formation.image} alt={formation.formation} className='w-full rounded-md' />
            <div className='flex flex-col items-start'>
                <span className='text-sm text-eafc'>Formation</span>
                <span className='text-xl font-semibold tracking-wider'>{formation.formation}</span>
            </div>
            <p className='text-base'>{formation.caption}</p>
            <div className='flex flex-row justify-between w-full font-semibold text-sm'>
                <TypeTags label={formation.flow} bgColor={getBackgroundClass(formation.flow)} textColor="text-white" borderColor='' border="" />
                <DifficultyTags level={formation.difficulty} />
            </div>
        </div>
    ))
}

// EA FC24 Top Players Cards

import { PlayersData, Stats, StatDetail } from './types/fc24Type';

import { formatDate } from './infoDesign';

import rankingTitle1 from '../../public/assets/eafc24/illustrations/rankingTitle1.png'
import rankingTitle2 from '../../public/assets/eafc24/illustrations/rankingTitle2.png'

import topCards from '@/components/pages/api/allTopCards';

interface topCardsProps {
    items: PlayersData[]
}

export const PlayerCards: React.FC<topCardsProps> = ({ items }) => {

    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (

        // href={`/game/fc24/topCards/${player.rank}`}

        <div className='grid grid-cols-2 grid-flow-row gap-8 justify-items-stretch w-full auto-rows-min' style={{ gridAutoRows: 'minmax(100px, auto)' }}>
            {items.slice(0, 20).map((player, index) => (
                <div
                    key={index}
                    className={`h-full w-full playerCard-background rounded-xl shadow-lg shadow-emerald-500/30 cursor-pointer ${expandedId === player.id ? 'col-span-2 row-span-2 flex flex-col space-y-8 py-16' : 'col-span-1 row-span-1 flex flex-row items-center justify-between py-6'}`}
                    onClick={() => setExpandedId(expandedId === player.id ? null : player.id)}
                >
                    <div
                        className={`flex flex-row items-center h-full ${expandedId !== player.id ? 'w-full justify-evenly' : 'justify-between px-16'}`}
                    >
                        {/* Default Card */}
                        <div className='flex flex-col z-10 items-center h-full justify-between'>
                            <div className='flex flex-row items-center space-x-3'>
                                {
                                    index <= 9 ? (
                                        <p className='text-3xl mb-3 font-bold text-intermediate'>Rank</p>
                                    ) : (
                                        <p className='text-3xl mb-3 font-bold text-eafc'>Rank</p>
                                    )
                                }
                                <div className='relative text-center text-dark font-black text-4xl rounded-md  w-fit items-center justify-center'>
                                    {
                                        index <= 9 ? (
                                            <Image src={rankingTitle1} alt={`${player.rank}`} width={100} />
                                        ) : (
                                            <Image src={rankingTitle2} alt={`${player.rank}`} width={100} />
                                    )}
                                    <div className='absolute top-0 bottom-4 left-0 right-3 flex items-center justify-center'>
                                        {player.rank}
                                    </div>
                                </div>
                            </div>
                            <Image src={player.shieldUrl} alt={player.lastName} width={205} height={290} />
                        </div>
                        <div className=' z-10 flex flex-col justify-between w-[300px] h-full space-y-4'>
                            <div className='flex flex-row h-full space-x-4 justify-between'>
                                <div className='flex flex-col h-full justify-between'>
                                    <div className='flex flex-col space-y-1'>
                                        <span className='text-xl text-eafc'>Name:</span>
                                        <span className='text-xl font-semibold'>{player.firstName} {player.lastName}</span>
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <span className='text-xl text-eafc'>Position:</span>
                                        <span className='text-xl font-semibold'>{player.position.shortLabel}</span>
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <span className='text-xl text-eafc'>Overall:</span>
                                        <span className='text-xl font-semibold'>{player.overallRating}</span>
                                    </div>
                                </div>
                                <div className={`flex flex-col items-center ${expandedId === player.id ? 'justify-between' : ''}`}>
                                    <div className='flex flex-col items-center space-y-1'>
                                        <span className='text-xl text-eafc'>Nationality:</span>
                                        <Image src={player.nationality.imageUrl} alt={player.nationality.label} width={80} height={80} className='text-lg font-semibold' />
                                        {
                                            expandedId === player.id && (
                                                <p className='text-xl font-semibold'>{player.nationality.label}</p>
                                            )
                                        }
                                    </div>
                                    <div className='flex flex-col items-center space-y-4'>
                                        <span className='text-xl text-eafc'>Team:</span>
                                        <Image src={player.team.imageUrl} alt={player.team.label} width={80} height={80} className='text-lg font-semibold' />
                                        {
                                            expandedId === player.id && (
                                                <p className='text-xl font-semibold'>{player.team.label}</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                expandedId !== player.id && (
                                    <div className='flex flex-col space-y-2'>
                                    <span className='text-xl text-eafc'>PlayStyles:</span>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <div className='flex flex-row items-end justify-between w-full'>
                                        {
                                            (player.playStylePlus || []).concat(player.playStyle || []).length > 0 ? (
                                            (player.playStylePlus || []).concat(player.playStyle || []).slice(0, 3).map((style, index) => (
                                                <div key={index} className='flex flex-col items-center space-y-2'>
                                                <Image src={style.imageUrl} alt={style.label} width={60} height={60} className='text-lg font-semibold' />
                                                <p className='text-center'>{style.label}</p>
                                                </div>
                                            ))
                                            ) : (
                                            <p>No Playstyles</p>
                                            )
                                        }
                                        </div>
                                    </div>
                                    </div>
                                )
                            }
                        </div>
                        {/* Expanded Card */}
                        {
                            expandedId === player.id && (
                                    <div className='flex flex-col h-full justify-between z-10'>
                                        {/* Cells */}
                                        <div className='flex flex-col items-start space-y-2'>
                                            <span className='text-xl text-eafc'>
                                                Weak Foot
                                            </span>
                                            <div className='text-xl font-semibold flex flex-row space-x-1'>
                                                {[...Array(5)].map((_, index) => {
                                                    if(index < player.weakFootAbility) {
                                                        return <FontAwesomeIcon key={index} icon={faStar} />
                                                    } else {
                                                        return <FontAwesomeIcon key={index} icon={farStar} />
                                                    }
                                                })}
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-start space-y-2'>
                                            <span className='text-xl text-eafc'>
                                                Att Work Rate
                                            </span>
                                            {/* For Star Rating instead of Text */}
                                            {/* <div className='text-xl font-semibold flex flex-row space-x-1'>
                                                {[...Array(5)].map((_, index) => {
                                                    if(index < player.weakFootAbility) {
                                                        return <FontAwesomeIcon key={index} icon={faStar} />
                                                    } else {
                                                        return <FontAwesomeIcon key={index} icon={farStar} />
                                                    }
                                                })}
                                            </div> */}
                                            <p className='text-xl font-semibold'>
                                                {
                                                    player.attackingWorkRate === 2 ?
                                                    (
                                                        <>High</>
                                                    ) : (
                                                        <>Low</>
                                                    )
                                                }
                                            </p>
                                        </div>
                                        <div className='flex flex-col items-start space-y-2'>
                                            <span className='text-xl text-eafc'>
                                                Preferred Foot
                                            </span>
                                            {/* For Star Rating instead of Text */}
                                            {/* <div className='text-xl font-semibold flex flex-row space-x-1'>
                                                {[...Array(5)].map((_, index) => {
                                                    if(index < player.weakFootAbility) {
                                                        return <FontAwesomeIcon key={index} icon={faStar} />
                                                    } else {
                                                        return <FontAwesomeIcon key={index} icon={farStar} />
                                                    }
                                                })}
                                            </div> */}
                                            <p className='py-1 px-2 text-md font-semibold text-dark bg-eafc rounded-md'>
                                                {
                                                    player.preferredFoot === 1 ?
                                                    (
                                                        <>RIGHT</>
                                                    ) : (
                                                        <>LEFT</>
                                                    )
                                                }
                                            </p>
                                        </div>
                                    </div>
                            )
                        }
                        {
                            expandedId === player.id && (
                                <div className='flex flex-col h-full justify-between z-10'>
                                        {/* Cells */}
                                        <div className='flex flex-col items-start space-y-2'>
                                            <span className='text-xl text-eafc'>
                                                Skill Moves
                                            </span>
                                            <div className='text-xl font-semibold flex flex-row space-x-1'>
                                                {[...Array(5)].map((_, index) => {
                                                    if(index < player.skillMoves) {
                                                        return <FontAwesomeIcon key={index} icon={faStar} />
                                                    } else {
                                                        return <FontAwesomeIcon key={index} icon={farStar} />
                                                    }
                                                })}
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-start space-y-2'>
                                            <span className='text-xl text-eafc'>
                                                Def Work Rate
                                            </span>
                                            {/* For Star Rating instead of Text */}
                                            {/* <div className='text-xl font-semibold flex flex-row space-x-1'>
                                                {[...Array(5)].map((_, index) => {
                                                    if(index < player.weakFootAbility) {
                                                        return <FontAwesomeIcon key={index} icon={faStar} />
                                                    } else {
                                                        return <FontAwesomeIcon key={index} icon={farStar} />
                                                    }
                                                })}
                                            </div> */}
                                            <p className='text-xl font-semibold'>
                                                {
                                                    player.attackingWorkRate === 2 ?
                                                    (
                                                        <>High</>
                                                    ) : (
                                                        <>Low</>
                                                    )
                                                }
                                            </p>
                                        </div>
                                        <div className='flex flex-col items-start space-y-2'>
                                            <span className='text-xl text-eafc'>
                                                Alt Positions
                                            </span>
                                            {/* For Star Rating instead of Text */}
                                            {/* <div className='text-xl font-semibold flex flex-row space-x-1'>
                                                {[...Array(5)].map((_, index) => {
                                                    if(index < player.weakFootAbility) {
                                                        return <FontAwesomeIcon key={index} icon={faStar} />
                                                    } else {
                                                        return <FontAwesomeIcon key={index} icon={farStar} />
                                                    }
                                                })}
                                            </div> */}
                                            <div className='text-md font-semibold flex flex-row space-x-2'>
                                                {
                                                    player.alternatePositions?.map((pos, index) => {
                                                        return(
                                                            <div key={index} className='py-1 px-2 text-dark bg-eafc rounded-md'>
                                                                {pos.shortLabel}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                        {
                            expandedId === player.id && (
                                <div className='flex flex-col h-full justify-between z-10'>
                                        {/* Cells */}
                                        <div className='flex flex-col items-start space-y-2'>
                                            <span className='text-xl text-eafc'>
                                                Birthday
                                            </span>
                                            <p className='text-lg font-semibold'>
                                                {formatDate(player.birthdate)}
                                            </p>
                                        </div>
                                        <div className='flex flex-col items-start space-y-2'>
                                            <span className='text-xl text-eafc'>
                                                Height
                                            </span>
                                            {/* For Star Rating instead of Text */}
                                            {/* <div className='text-xl font-semibold flex flex-row space-x-1'>
                                                {[...Array(5)].map((_, index) => {
                                                    if(index < player.weakFootAbility) {
                                                        return <FontAwesomeIcon key={index} icon={faStar} />
                                                    } else {
                                                        return <FontAwesomeIcon key={index} icon={farStar} />
                                                    }
                                                })}
                                            </div> */}
                                            <p className='text-xl font-semibold'>
                                                {player.height} CM
                                            </p>
                                        </div>
                                        <div className='flex flex-col items-start space-y-2'>
                                            <span className='text-xl text-eafc'>
                                                Weight
                                            </span>
                                            {/* For Star Rating instead of Text */}
                                            {/* <div className='text-xl font-semibold flex flex-row space-x-1'>
                                                {[...Array(5)].map((_, index) => {
                                                    if(index < player.weakFootAbility) {
                                                        return <FontAwesomeIcon key={index} icon={faStar} />
                                                    } else {
                                                        return <FontAwesomeIcon key={index} icon={farStar} />
                                                    }
                                                })}
                                            </div> */}
                                            <p className='text-xl font-semibold'>
                                                {player.weight} KG
                                            </p>
                                        </div>
                                </div>
                            )
                        }
                        <Link href="#" className='text-eafc text-2xl z-10 py-1 px-3 rounded-full border-2 border-eafc button-hover-eafc'>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>
                    {
                        expandedId === player.id && (
                            <div className={`z-10 flex flex-col w-full items-center px-16 space-y-8`}>
                                {/* PlayStyles */}
                                <div className='flex flex-col w-full space-y-4'>
                                    <hr className='z-10 w-full border-1 border-white rounded-xl items-center' />
                                    <span className='text-xl text-eafc'>PlayStyles:</span>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <div className='flex flex-row flex-wrap items-start justify-between w-full'>
                                        {
                                            (player.playStylePlus || []).concat(player.playStyle || []).length > 0 ? (
                                            (player.playStylePlus || []).concat(player.playStyle || []).map((style, index) => (
                                                <div key={index} className='flex flex-row items-center px-3 py-2 border-2 justify-between space-x-4 rounded-md'>
                                                    <Image src={style.imageUrl} alt={style.label} width={40} height={40} className='text-lg font-semibold' />
                                                    <p className='text-center'>{style.label}</p>
                                                </div>
                                            ))
                                            ) : (
                                            <p>No Playstyles</p>
                                            )
                                        }
                                        </div>
                                    </div>
                                </div>
                                {/* Statistics */}
                                <div className='flex flex-row text-lg w-full items-start justify-between'>
                                    {/* Pace */}
                                    <StatSection 
                                        title="Pace"
                                        stats={player.stats}
                                        statKeys={['Acceleration', 'Sprint Speed']}
                                    />
                                    {/* Shooting */}
                                    <StatSection 
                                        title="Shooting"
                                        stats={player.stats}
                                        statKeys={['Positioning', 'Finishing', 'Shot Power', 'Long Shots', 'Volleys', 'Penalties']}
                                    />
                                    {/* Passing */}
                                    <StatSection 
                                        title="Passing"
                                        stats={player.stats}
                                        statKeys={['Vision', 'Crossing', 'Free Kick Accuracy', 'Short Passing', 'Long Passing', 'Curve']}
                                    />
                                    {/* Dribbling */}
                                    <StatSection 
                                        title="Dribbling"
                                        stats={player.stats}
                                        statKeys={['Agility', 'Balance', 'Reactions', 'Ball Control', 'Dribbling', 'Composure']}
                                    />
                                    {/* Defending */}
                                    <StatSection 
                                        title="Defending"
                                        stats={player.stats}
                                        statKeys={['Interceptions', 'Heading Accuracy', 'Defensive Awareness', 'Standing Tackle', 'Sliding Tackle']}
                                    />
                                    {/* Physicality */}
                                    <StatSection 
                                        title="Physicality"
                                        stats={player.stats}
                                        statKeys={['Jumping', 'Stamina', 'Strength', 'Aggression']}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    );
    
}

type StatSectionProps = {
    title: string,
    stats: {
        [key: string]: StatDetail;
    },
    statKeys: string[]
}

const StatSection: React.FC<StatSectionProps> = ({ title, stats, statKeys }) => {
    const mainStatKey = title.substring(0, 3).toLowerCase();

    function getIconForm(form: FormType): IconProp {
        switch (form) {
            case 'Balanced':
                return faShieldHalved;
            case 'Offensive':
                return faStar;
            case 'Defensive':
                return faShieldHalved;
            default:
                return faStar;
        }
    }
    function getIconDiff(form: DiffType): IconProp {
        switch (form) {
            case 'Beginner':
                return faShieldHalved;
            case 'Intermediate':
                return faStar;
            case 'Advanced':
                return faPlaneUp;
            default:
                return faStar;
        }
    }

    return (
        <div className='flex flex-col h-full w-48 space-y-2'>
            <div className='flex flex-row w-full justify-between items-center'>
                <p className='text-eafc'>{title}</p>
                {/* Assuming the main stat is named with the first 3 letters of the title */}
                <p className='font-semibold'>{stats[mainStatKey]?.value}</p>
            </div>
            {statKeys.map((key) => (
                <div key={key} className='flex flex-col text-base w-full space-y-2'>
                    <div className='flex flex-row w-full justify-between items-center'>
                        <p>{key}</p>
                        <p className='font-semibold'>{stats[toCamelCase(key)]?.value}</p>
                    </div>
                    {/* Placeholder for the stat bar */}
                    <div className="bg-gray-700 h-1 w-full rounded-lg overflow-hidden">
                        <div className={`${getBgColorClass(stats[toCamelCase(key)]?.value)} h-1 rounded-lg`} style={{ width: `${stats[toCamelCase(key)]?.value}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function toCamelCase(str: string): string {
    return str
      .split(' ') // Split the string into words
      .map((word, index) => 
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ) // Lowercase the first word, capitalize the initial letter of subsequent words
      .join(''); // Join them back together without spaces
}

export function getBgColorClass(value: number) {
    if (value >= 70) {
      return "bg-beginner"; 
    } else if (value >= 50 && value < 70) {
      return "bg-intermediate";
    } else {
      return "bg-advanced";
    }
}

// EA FC 24 Skill Moves Card Layout

import type { SkillMove } from '@/components/pages/api/allSkillMoves';

export const SkillMoves: React.FC = () => {

    const [skillData, setSkillData] = useState<SkillMove[]>([])

    useEffect(() => {
        const fetchSkillData = async () => {
            try {
                const response = await axios.get<SkillMove[]>('/api/allSkillMoves');
                setSkillData(response.data)
                // console.log(response.data);
            }
            catch(error) {
                console.log('Error fetching Skill Moves:', error);
            }
        }
        fetchSkillData();
    }, []);

    return(
        <div className='grid grid-cols-3 grid-flow-row gap-12'>
            {skillData.map((skill: any, index: any) => (
                <div key={index} className={`skill-background border-1 flex flex-col font-base w-full items-center space-y-4 p-6 ${ skill.star >= 3 ? 'shadow-lg shadow-amber-600/30' : 'shadow-lg shadow-emerald-400/30'}`}>
                    {/* Title */}
                    <div className={`z-10 flex flex-row justify-between items-center w-full`}>
                        <p className={`font-semibold text-eafc text-xl ${ skill.star >= 3 ? 'text-intermediate' : 'text-beginner' }`}>
                            {skill.name}
                        </p>
                        <div className='flex flex-row justify-end space-x-1'>
                            {[...Array(5)].map((_, index) => {
                                if(index < skill.star) {
                                    return <FontAwesomeIcon key={index} icon={faStar} className={`${ skill.star >= 3 ? 'text-intermediate' : 'text-beginner'}`} />
                                }
                            })}
                        </div>
                    </div>
                    {/* Video */}
                    {
                        skill.video && (
                            <iframe
                                width="400"
                                height="200"
                                src={`https://www.youtube.com/embed/${skill.video.id};start=${skill.video.start}&end=${skill.video.stop}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className='z-10'
                            ></iframe>
                        )
                    }
                    {/* PS controls */}
                    <div className='z-10 flex flex-col w-full space-y-1'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <span>
                                <Image src={skill.psControls.icon} alt="PlayStation" className='w-full' />
                            </span>
                            <span>
                                <Image src={skill.psControls.shortLabel} alt="PlayStation" className='w-full' />
                            </span>
                        </div>
                        <p>
                            {skill.psControls.label}
                        </p>
                    </div>
                    <hr className='z-10 border-1 border-white w-full rounded-md' />
                    {/* XBOX Controls */}
                    <div className='z-10 flex flex-col w-full space-y-1'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <span>
                                <Image src={skill.xboxControls.icon} alt="PlayStation" className='w-full' />
                            </span>
                            <span className=''>
                                <Image src={skill.xboxControls.shortLabel} alt="PlayStation" className='w-full' />
                            </span>
                        </div>
                        <p>
                            {skill.xboxControls.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Guides Page

import { GuideData } from "./types/valorantType";

export const GuideList: React.FC = () => {

    const [guideData, setGuideData] = useState<GuideData[]>([])

    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                const response = await axios.get<{data: GuideData[]}, any>('/api/fc24/allGuides');
                setGuideData(response.data);
                // console.log(response.data);
            }
            catch(error) {
                console.log('Unable to fetch Guide Data', error);
            }
        }
        fetchGuideData();
    }, [])

    return(
        <div className='grid grid-cols-3 grid-flow-row gap-8 w-full'>
            {guideData.map((guide: any, index: any) => (
                <div key={index} className="skill-background w-full shadow-md shadow-emerald-300/30 rounded-2xl flex flex-col items-start justify-between">
                    <div className="z-10 relative pt-[56.25%] w-full">
                        <iframe
                        src={`https://www.youtube.com/embed/${guide.snippet.resourceId.videoId}`}
                        title={guide.snippet.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                        allowFullScreen
                        ></iframe>
                    </div>
                    <div className="z-10 px-6 py-6 space-y-3 flex flex-col justify-between h-full w-full">
                        <h3 className="text-xl text-wrap font-medium text-eafc">{guide.snippet.title}</h3>
                        <div className="w-full flex flex-row items-center justify-between">
                            <div className="flex flex-col space-y-4">
                                <h4 className="text-md">Uploaded By: <Link href={`https://www.youtube.com/@THEGUIDE_bPG`} target="_blank" className="font-semibold text-intermediate" >{guide.snippet.channelTitle}</Link></h4>
                                <p className="text-md">Date Posted: <span className="italic">{guide.snippet.publishedAt.substring(0, 10)}</span></p>
                            </div>
                            <div className="flex flex-col space-y-4 items-center">
                                <div className="text-xl font-bold flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faHeart} className="text-2xl text-intermediate" />
                                    <p>3.6k</p>
                                </div>
                                <div className="text-xl font-bold flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faShareNodes} className="text-2xl text-intermediate" />
                                    <p>0.7k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const HighlightList: React.FC = () => {

    const [guideData, setGuideData] = useState<GuideData[]>([])

    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                const response = await axios.get<{data: GuideData[]}, any>('/api/fc24/allHighlights');
                setGuideData(response.data);
                // console.log(response.data);
            }
            catch(error) {
                console.log('Unable to fetch Guide Data', error);
            }
        }
        fetchGuideData();
    }, [])

    return(
        <div className='grid grid-cols-3 grid-flow-row gap-8 w-full'>
            {guideData.map((guide: any, index: any) => (
                <div key={index} className="skill-background w-full shadow-md shadow-emerald-300/30 rounded-2xl flex flex-col items-start justify-between">
                    <div className="z-10 relative pt-[56.25%] w-full">
                        <iframe
                        src={`https://www.youtube.com/embed/${guide.snippet.resourceId.videoId}`}
                        title={guide.snippet.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                        allowFullScreen
                        ></iframe>
                    </div>
                    <div className="z-10 px-6 py-6 space-y-3 flex flex-col justify-between h-full w-full">
                        <h3 className="text-xl text-wrap font-medium text-eafc">{guide.snippet.title.replace(/#\w+/g, '')}</h3>
                        <div className="w-full flex flex-row items-center justify-between">
                            <div className="flex flex-col space-y-4">
                                <h4 className="text-md">Uploaded by: <Link href={`https://www.youtube.com/@EASPORTSFCPro`} target="_blank" className="font-semibold text-intermediate" >{guide.snippet.channelTitle}</Link></h4>
                                <p className="text-md">Date Posted: <span className="italic">{guide.snippet.publishedAt.substring(0, 10)}</span></p>
                            </div>
                            <div className="flex flex-col space-y-4 items-center">
                                <div className="text-xl font-bold flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faHeart} className="text-2xl text-intermediate" />
                                    <p>3.6k</p>
                                </div>
                                <div className="text-xl font-bold flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faShareNodes} className="text-2xl text-intermediate" />
                                    <p>0.7k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
  