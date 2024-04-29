'use client'

import { useState, useEffect, useRef } from "react"
import axios from "axios";
import { AgentData, AgentDataExtended, AgentListProps } from "./types/valorantType"
import { MapData } from "./types/valorantType";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, Variant, Variants, motion } from "framer-motion";
import { upHome, downHome, agentAnim, overlays, imageSliderLeft, imageSliderRight } from "./animations";

export const AgentList: React.FC<AgentListProps> = ({ agentData }) => {

    const [expandedId, setExpandedId] = useState<number | null>(null);

    return(
        <div className='grid 2xl:grid-cols-2 grid-flow-row gap-12 w-full'>
            {agentData.map((agent: any, index: any) => (
                agent.isPlayableCharacter && (
                    <motion.div
                        key={index}
                        className={`flex p-6 valo-background shadow-md shadow-violet-400/30 rounded-md ${expandedId === agent.uuid ? 'col-span-2 row-span-2 w-full' : 'col-span-1 row-span-1 w-fit hoverScale-valo'}`}
                        onClick={() => setExpandedId(expandedId === agent.uuid ? null : agent.uuid)}
                        >
                        {
                            expandedId !== agent.uuid && (
                                <div className="z-10 flex flex-row w-full">
                                    <Image src={agent.fullPortrait} alt={agent.displayName} width={500} height={500} className="-ml-12" style={{overflow: 'hidden', clipPath: 'rect(auto 300px auto 50px)'}} />
                                    <div className="flex flex-col h-full justify-between w-full">
                                        <span className="font-semibold text-valo text-2xl tracking-wider">{agent.displayName.toUpperCase()}</span>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <Image src={agent.role.displayIcon} alt={agent.role.displayName} width={24} height={24} />
                                            <p className="text-lg">{agent.role.displayName}</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between border-b-2 border-valo">
                                            {agent.abilities.slice(0, 4).map((ability: any, abilityIndex: any) => (
                                                <div key={abilityIndex} className={`hover-valo-icon p-4 cursor-pointer rounded-t-sm ${agent.defaultAbility === ability.description ? 'bg-valo90' : 'bg-valo30'}`}>
                                                    <Image src={ability.displayIcon} alt={agent.displayName} width={30} height={30} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-wrap line-clamp-3 w-full text-base">
                                            {agent.defaultAbility}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            expandedId === agent.uuid && (
                                <motion.div className="z-10 flex flex-col justify-between w-full h-fit"
                                    variants={agentAnim}
                                    initial="hidden"
                                    animate="visible"
                                    whileTap="tap"
                                    exit="hidden"
                                >
                                    <div className="flex flex-row w-full justify-between items-center">
                                        <Image src={agent.fullPortrait} alt={agent.displayName} width={500} height={500} className="-ml-12" style={{overflow: 'hidden', clipPath: 'rect(auto 300px auto 50px)'}} />
                                        <div className="flex flex-col space-y-6">
                                            <div className="flex flex-col space-y-4">
                                                <div className="flex flex-row items-center space-x-3">
                                                    <Image src={agent.displayIcon} alt={agent.displayName} width={50} height={50} />
                                                    <span className="font-semibold text-valo text-2xl tracking-wider">{agent.displayName.toUpperCase()}</span>
                                                </div>
                                                <p>{agent.description}</p>
                                            </div>
                                            <div className="flex flex-col space-y-4">
                                                <div className="flex flex-row items-center space-x-3">
                                                    <Image src={agent.role.displayIcon} alt={agent.role.displayName} width={25} height={25} />
                                                    <span className="font-medium text-white text-xl">{agent.role.displayName}</span>
                                                </div>
                                                <p>{agent.role.description}</p>
                                            </div>
                                            <div className="flex flex-row items-center justify-between w-full">
                                                <span className="font-medium text-valo text-xl">Abilities:</span>
                                                {agent.abilities.slice(0, 4).map((ability: any, abilityIndex: number) => {
                                                    let prefix = "";
                                                    switch (abilityIndex) {
                                                        case 0:
                                                            prefix = "Q*:";
                                                            break;
                                                        case 1:
                                                            prefix = "E*:";
                                                            break;
                                                        case 2:
                                                            prefix = "C*:";
                                                            break;
                                                        case 3:
                                                            prefix = "X*:";
                                                            break;
                                                        default:
                                                            prefix = ""; // Default case, if needed
                                                    }
                                                    return(
                                                        <div key={abilityIndex} className="flex flex-row items-center space-x-3">
                                                            <span className={`font-bold ${abilityIndex === 3 ? 'text-intermediate' : ' text-valo'}`}>{prefix}</span>
                                                            <Image src={ability.displayIcon} alt={ability.displayName} width={40} height={40} />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <span className="text-xs">*These are default key bindings</span>
                                        </div>
                                        <Image src={agent.background} alt={agent.displayName} width={200} height={500} />
                                    </div>
                                    <hr className="border-valo my-8"/>
                                    <div className="grid grid-cols-2 grid-flow-row gap-8 px-4">
                                        {agent.abilities.slice(0, 4).map((ability: any, abilityIndex: number) => (
                                            <div key={abilityIndex} className="flex flex-col space-y-4">
                                                <div className="flex flex-row space-x-3 items-center">
                                                    <div className={`p-3 cursor-pointer rounded-sm ${abilityIndex === 3 ? 'bg-primary' : 'bg-valo90'}`}>
                                                        <Image src={ability.displayIcon} alt={agent.displayName} width={30} height={30} />
                                                    </div>
                                                    <p className={`font-semibold text-2xl ${abilityIndex === 3 ? 'text-teal-500' : 'text-valo'}`}>{ability.displayName}</p>
                                                </div>
                                                <p>
                                                    {ability.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        }
                    </motion.div>
                )
            ))}
        </div>
    )
}

export const MapList: React.FC = () => {

    const [mapData, setMapData] = useState<MapData[]>([]);

    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                const response = await axios.get<{data: MapData[]}, any>(`/api/valorant/allMaps`);
                setMapData(response.data);
                // console.log(response.data.data);
            }
            catch(error) {
                console.log('Unable to Fetch Map Details', error);
            }
        }
        fetchMapData();
    }, []);

    // Calculate co-ordinates for callouts
    // const calcPos = (map: MapData, x: number, y: number) => {
    //     const relativeX = (x * map.xMultiplier + map.xScalarToAdd) * 50; // Assuming the background image's width as 50%
    //     const maxHeight = 100;
    //     const adjustedY = y * -1
    //     const relativeY = (adjustedY * map.yMultiplier + map.yScalarToAdd) * 120; // Assuming the background image's height as 100%
    //     console.log(relativeX, relativeY);
    //     return { relativeX, relativeY };
    // };
    return(
        <div className="grid grid-cols-1 grid-flow-row w-full gap-8">
            {mapData.map((map: any, index: any) => (
                map.narrativeDescription && (
                    <div
                        key={index}
                        className={`row-span-1 valo-background flex flex-col rounded-lg shadow-md shadow-violet-400/30 space-y-8 ${expandedId === map.uuid ? 'p-8' : 'hoverMap-valo'}`}
                        onClick={() => setExpandedId(expandedId === map.uuid ? null : map.uuid)}
                        >
                        <motion.div className="z-10 flex flex-col 2xl:flex-row w-full justify-between items-center space-x-8"
                            variants={agentAnim}
                            whileTap="tap"
                        >
                            <Image src={map.splash} alt={map.displayName} width={520} height={500} className={`w-full ${expandedId === map.uuid ? 'rounded-sm' : 'rounded-t-md 2xl:rounded-l-md'}`} />
                            <div className={`flex flex-col w-full items-start justify-between space-y-4 2xl:space-y-0 h-full py-8 2xl:pr-4 ${expandedId === map.uuid ? 'px-0' : 'px-4'}`}>
                                <span className="text-3xl font-semibold tracking-wider text-valo">
                                    {map.displayName.toUpperCase()}
                                </span>
                                <div className="flex flex-col space-y-1">
                                    <p className="text-lg font-semibold text-valo">Description:</p>
                                    <p className="text-md">{map.narrativeDescription}</p>
                                </div>
                                <div className="flex flex-row space-x-3 items-center text-lg">
                                    <p className="font-semibold text-valo">Plant Sites:</p>
                                    <p>{map.tacticalDescription}</p>
                                </div>
                                <div className="flex flex-row space-x-3 items-center text-lg">
                                    <p className="font-semibold text-valo">Coordinates:</p>
                                    <p>{map.coordinates}</p>
                                </div>
                            </div>
                        </motion.div>
                        {
                            expandedId === map.uuid && (
                                <motion.div className="z-10 flex flex-col 2xl:flex-row items-center 2xl:items-start justify-around space-y-4 2xl: space-y-0"
                                    variants={agentAnim}
                                    initial="hidden"
                                    animate="visible"
                                    whileTap="tap"
                                    exit="hidden"
                                >
                                    <div className="flex flex-col items-center 2xl:items-start space-y-2">
                                        <div className="flex flex-col space-y-2 mb-4">
                                            <p className="text-xl font-semibold text-valo">Map Outline:</p>
                                            <span className="text-md">
                                                Highlighed Areas are Spike Plant regions
                                            </span>
                                        </div>
                                        <div className="h-[200px] 2xl:h-[600px] scrollbar-custom overflow-x-scroll 2xl:overflow-y-scroll px-4 py-2 space-y-4 bg-neutral-950 rounded-md shadow-sm shadow-violet-500/40">
                                            {map.callouts.map((call: any, index: any) => (
                                                <div key={index} className="flex flex-row space-x-4 items-center">
                                                    <div className="px-3 py-1 text-white font-bold text-lg bg-valo30 flex flex-row items-center h-fit rounded-md">
                                                        {index + 1}
                                                    </div>
                                                    <div className="flex flex-col space-y-2 h-fit">
                                                        <p className="text-valo">Region Name: <span className="font-semibold text-white ml-2">{call.regionName}</span></p>
                                                        <p className="text-valo">Super Region Name: <span className="font-semibold text-white ml-2">{call.superRegionName}</span></p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Callout Calculation */}
                                    {/* <div style={{ position: 'relative', width:'50%', height: '100%', backgroundImage: `url(${map.displayIcon})`, backgroundSize: 'cover' }}>
                                        {map.callouts.map((call: any, index: any) => {
                                            // const { relativeX, relativeY } = calcPos(map, call.location.x, call.location.y);
                                            return(
                                                <div key={index} style={{ position: 'absolute', left:  `${relativeX}%`, top: `${relativeY}%`, transform: 'translate(-50%, -50%)', padding: '5px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                                                    {call.regionName}
                                                </div>
                                            )
                                        })}
                                    </div> */}
                                    <Image src={map.displayIcon} alt={map.displayName} width={700} height={500} />
                                </motion.div>
                            )
                        }
                    </div>
                ) 
            ))}
        </div>
    );
}

import { CrosshairData } from "./types/valorantType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faCopy, faXmark, faArrowLeft, faArrowRight, faAngleRight, faAngleLeft, faBookmark } from "@fortawesome/free-solid-svg-icons";

interface Crosshair {
    key: any,
    username: string,
    displayIcon: any,
    title: string,
    rank: any,
    crosshair: any,
    code: string
}

export const CrosshairList: React.FC = () => {

    const [crosshairData, setCrosshairData] = useState<CrosshairData[]>([]);

    const [preview, setPreview] = useState(false);

    const [selectCrosshair, setSelectCrosshair] = useState<Crosshair | null>(null);

    const overlayRef = useRef<HTMLDivElement>(null);

    const handleCopy = async (code: any) => {
        await navigator.clipboard.writeText(code);
        alert('Crosshair code copied to clipboard!');
    }

    const handlePreview = (crosshair: any) => {
        setSelectCrosshair(crosshair);
        setPreview(true);
    }

    const handleClick = (event: any) => {
        if(overlayRef.current && !overlayRef.current.contains(event.target)) {
            setPreview(false);
        }
    }

    useEffect(() => {
        const fetchCrosshairData = async () => {
            try {
                const response = await axios.get<{items: CrosshairData[]}, any>(`/api/valorant/allCrosshairs`);
                setCrosshairData(response.data);
                // console.log(response.data);
            }
            catch(error) {
                console.log('Error fetching players data:', error);
            }
        };
        fetchCrosshairData();
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return(
        <div className='grid grid-cols-2 2xl:grid-cols-4 grid-flow-row gap-4 w-full'>
            {crosshairData.map((cross: any, index: number) => (
                <motion.div key={index} className="hoverCross-valo flex flex-col items-center valo-background shadow-md shadow-violet-400/30 rounded-md w-fit" onClick={() => handlePreview(cross)}>
                    <Image src={cross.crosshair} alt={cross.title} width={600} height={212} className="z-10 rounded-t-md" />
                    <div className="z-10 flex flex-col items-start justify-between space-y-5 w-full p-5">
                        <p className="font-semibold text-xl w-full">{cross.title}</p>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center space-x-3">
                                <Image src={cross.displayIcon} alt={cross.username} width={30} height={30} />
                                <span className="font-medium text-valo text-base">{cross.username}</span>
                            </div>
                            <Image src={cross.rank} alt={cross.username} width={30} height={30} />
                        </div>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="text-base font-bold flex flex-row items-center space-x-2">
                                <FontAwesomeIcon icon={faHeart} className="text-xl text-intermediate" />
                                <p>3.6k</p>
                            </div>
                            <div className="text-base font-bold flex flex-row items-center space-x-3">
                                <FontAwesomeIcon icon={faShareNodes} className="text-xl text-intermediate" />
                                <p>0.7k</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div
                                className="hoverButton-valo text-base text-dark font-bold flex flex-row cursor-pointer items-center rounded-sm space-x-3 py-2 px-3"
                                onClick={() => handleCopy(cross.code)}
                            >
                                <FontAwesomeIcon icon={faCopy} className="text-xl" />
                                <p>Copy</p>
                            </div>
                            <div
                                className="hoverButton-valo text-base text-dark font-bold flex flex-row cursor-pointer items-center rounded-sm space-x-3 py-2 px-3"
                                onClick={() => handlePreview(cross)}
                            >
                                <FontAwesomeIcon icon={faCirclePlay} className="text-xl" />
                                <p>Preview</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}

            {preview && (
                <motion.div className="fixed inset-0 z-20 bg-black bg-opacity-80 flex justify-center items-center"
                    variants={overlays}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="flex flex-col items-center valo-background shadow-md shadow-violet-400/30 rounded-md" ref={overlayRef}>
                        {selectCrosshair && (
                            <>
                                <Image src={selectCrosshair.crosshair} alt={selectCrosshair.title} width={500} height={212} className="z-10 rounded-t-md shadow-lg shadow-violet-400/30" />
                                <div className="flex flex-col w-full h-full px-8 py-7 space-y-4">
                                    <p className="z-10 font-semibold text-xl w-full">{selectCrosshair.title}</p>
                                    <div className="z-10 w-full flex flex-row justify-between items-center">
                                        <div className="flex flex-row items-center space-x-3">
                                            <Image src={selectCrosshair.displayIcon} alt={selectCrosshair.username} width={30} height={30} />
                                            <span className="font-medium text-valo text-base">{selectCrosshair.username}</span>
                                        </div>
                                        <Image src={selectCrosshair.rank} alt={selectCrosshair.username} width={30} height={30} />
                                    </div>
                                    <div className="z-10 w-full flex flex-row justify-between items-center">
                                        <div className="text-base font-bold flex flex-row items-center space-x-3">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl text-intermediate" />
                                            <p>3.6k</p>
                                        </div>
                                        <div className="text-base font-bold flex flex-row items-center space-x-3">
                                            <FontAwesomeIcon icon={faShareNodes} className="text-xl text-intermediate" />
                                            <p>0.7k</p>
                                        </div>
                                    </div>
                                    <div className="z-10 w-full flex flex-row justify-between items-center">
                                        <div
                                            className="hoverButton-valo text-base text-dark font-bold flex flex-row items-center space-x-3 py-2 px-3 rounded-sm cursor-pointer"
                                            onClick={() => handleCopy(selectCrosshair.code)}
                                        >
                                            <FontAwesomeIcon icon={faCopy} className="text-xl" />
                                            <p>Copy</p>
                                        </div>
                                        <div
                                            className="hoverClose text-base font-bold flex flex-row items-center space-x-3 py-2 px-3 rounded-sm cursor-pointer"
                                            onClick={() => handleClick(selectCrosshair)}
                                        >
                                            <FontAwesomeIcon icon={faXmark} className="text-xl" />
                                            <p>Close</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    )

}

import { GuideData } from "./types/valorantType";

export const GuideList: React.FC = () => {

    const [guideData, setGuideData] = useState<GuideData[]>([])

    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                const response = await axios.get<{data: GuideData[]}, any>('/api/valorant/allGuides');
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
        <div className='grid grid-cols-2 2xl:grid-cols-3 grid-flow-row gap-8 w-full'>
            {guideData.map((guide: any, index: any) => (
                <div key={index} className="hoverMap-valo w-full shadow-md shadow-violet-400/30 rounded-md flex flex-col items-start justify-between">
                    <div className="relative pt-[56.25%] w-full">
                        <iframe
                        src={`https://www.youtube.com/embed/${guide.snippet.resourceId.videoId}`}
                        title={guide.snippet.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="absolute top-0 left-0 w-full h-full rounded-t-md"
                        allowFullScreen
                        ></iframe>
                    </div>
                    <div className="valo-background px-6 py-6 space-y-3 flex flex-col justify-between h-full w-full">
                        <h3 className="z-10 text-lg text-wrap font-medium text-valo">{guide.snippet.title}</h3>
                        <div className="z-10 w-full flex flex-row items-center justify-between">
                            <div className="flex flex-col space-y-4">
                                <h4 className="text-md">Uploaded By: <Link href={`https://www.youtube.com/@${guide.snippet.channelTitle}`} target="_blank" className="font-semibold text-intermediate" >{guide.snippet.channelTitle}</Link></h4>
                                <p className="text-md">Date Posted: <span className="italic">{guide.snippet.publishedAt.substring(0, 10)}</span></p>
                            </div>
                            <div className="flex flex-col space-y-4 items-center">
                                <div className="text-lg font-bold flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faHeart} className="text-xl text-intermediate" />
                                    <p>3.6k</p>
                                </div>
                                <div className="text-lg font-bold flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faShareNodes} className="text-xl text-intermediate" />
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

import { LineupData } from "./types/valorantType";
// Per Lineup
import { Lineup, LineupFilterProps } from "./types/valorantType";
import { fetchLineup } from "@/components/pages/api/valorant/allLineups";

import dpIcon from '../../public/assets/displayPicture.png';
import { tap } from "node:test/reporters";

export const LineupList: React.FC<LineupFilterProps> = ({ data }) => {

    // All Data

    const [selectLineup, setSelectLineup] = useState<Lineup | null>(null);
    const [active, setActive] = useState(false);
    const [imageSlider, setImageSlider] = useState<Variants>(imageSliderLeft);

    // Image Slider
    const [imageIndex, setImageIndex] = useState(0);

    const prevButton = () => {
        setImageIndex((prev) => prev - 1);
        setImageSlider(imageSliderLeft);
    };

    const nextButton = () => {
        setImageIndex((next) => next + 1);
        setImageSlider(imageSliderRight);
    };

    // Lineup Overlay

    const overlayRef = useRef<HTMLDivElement>(null);

    const handleLineup = (lineup: Lineup) => {
        setSelectLineup(lineup);
        setActive(true);
    }

    const handleClick = (event: any) => {
        if(overlayRef.current && !overlayRef.current.contains(event.target)) {
            setActive(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [])

    // console.log(selectLineup);

    return(
        <div className='grid grid-cols-2 2xl:grid-cols-4 grid-flow-row gap-8 w-full'>
            {data.lineups.map((map: any) => (
                map.agents.map((agent: any) => (
                    agent.lineups.map((lineup: any, lineIndex: number) => (
                        <motion.div key={lineIndex} className="hoverScale-valo valo-background w-fit h-full rounded-md shadow-md shadow-violet-400/30" onClick={() => handleLineup(lineup)}>
                            <div className="image-container z-10 flex justify-center items-center w-96 lg:w-full h-[205px] relative rounded-t-lg overflow-hidden">
                                <Image className="rounded-t-lg" src={lineup.thumbnail} alt={lineup.title} width={395} height={365} />
                                <div className="overlay absolute inset-0 flex flex-col justify-center items-stretch bg-gradient-to-b from-black/70 from-10% via-neutral-400/0 to-black/70 to-90% w-full h-full justify-between">
                                    <div className="flex flex-row justify-end items-start w-full">
                                        {lineup.abilityIcon && (
                                            <Image src={lineup.abilityIcon} alt={lineup.ability} width={55} height={40} className="p-2 bg-valo30 rounded-md mt-2 mr-2" />
                                        )}
                                    </div>
                                    <div className="flex flex-row justify-start items-end w-full">
                                        {lineup.displayIcon && (
                                            <Image src={lineup.displayIcon} alt={lineup.displayName} width={80} height={40} className="p-2 bg-valo30 rounded-md mb-2 ml-2" />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="z-10 flex flex-col h-full items-start space-y-2 p-5">
                                <p className="z-10 text-lg tracking-wide">{lineup.title}</p>
                                
                                {
                                    lineup.location === 1 ?
                                    (
                                        <p className="z-10 font-normal">For {lineup.location[0]}</p>
                                    )
                                    :
                                    (
                                        <p className="z-10 font-normal">From <span className="text-valo mx-1">{lineup.location[0]}</span> to <span className="text-valo mx-1">{lineup.location[1]}</span></p>
                                    )
                                }
                            </div>
                        </motion.div>
                        
                    ))
                ))
            ))}
            {/* Description Code for Overlay */}
                                {/* {lineup.description.map((desc: any, index: number) => (
                                    <ol>
                                        {index + 1}. {desc}
                                    </ol>
            ))} */}
            {active && (
                <motion.div className="fixed z-10 inset-0 bg-black bg-opacity-80 flex justify-center items-center"
                    variants={overlays}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex max-w-[1000px] 2xl:max-w-[3600px] flex-col-reverse 2xl:flex-row rounded-md shadow-md shadow-violet-400/30" ref={overlayRef}>
                        {selectLineup && (
                            <>
                                {/* Content */}
                                <div className="h-auto max-w-[1000px] 2xl:h-auto 2xl:max-w-[3600px] flex flex-row 2xl:flex-col justify-between p-8 valo-background">
                                    <div className="z-10 text-base space-y-4 flex flex-col w-3/4 2xl:w-full">
                                        <h2 className="text-xl font-semibold text-valo">{selectLineup.title}</h2>
                                        <div className="space-y-1 font-regular">
                                            {selectLineup.description.map((desc: any, index: number) => (
                                                <p key={index}>
                                                    {index + 1}. {desc}
                                                </p>
                                            ))}
                                        </div>
                                        {selectLineup.note && (
                                            <p>
                                                (Note: {selectLineup.note})
                                            </p>
                                        )}
                                    </div>
                                    <div className="z-10 flex flex-col items-start space-y-4 2xl:space-y-6">
                                        <div className="flex flex-row space-x-4 items-center">
                                            <div className="text-lg font-bold flex flex-row items-center space-x-3">
                                                <FontAwesomeIcon icon={faHeart} className="text-2xl text-intermediate" />
                                                <p>3.6k</p>
                                            </div>
                                            <div className="text-lg font-bold flex flex-row items-center space-x-3">
                                                <FontAwesomeIcon icon={faShareNodes} className="text-2xl text-intermediate" />
                                                <p>0.7k</p>
                                            </div>
                                            <FontAwesomeIcon icon={faBookmark} className={`text-2xl text-intermediate`} />
                                        </div>
                                        <div className="flex flex-col items-start w-full space-y-3">
                                            <p>Uploaded By:</p>
                                            <div className="flex flex-col 2xl:flex-row space-y-2 2xl:space-y-0 2xl:items-center justify-between w-full">
                                                <div className="flex flex-row items-center space-x-2">
                                                    <Image src={dpIcon} alt={selectLineup.username} width={30} height={30} />
                                                    <Link href={`https://lineupsvalorant.com/profile/${selectLineup.username}`} className="text-lg text-valo font-semibold underline" target="_blank">{selectLineup.username}</Link>
                                                </div>
                                                <p className="text-sm">{selectLineup.date}</p>
                                            </div>
                                        </div>
                                        {selectLineup.abilityIcon && selectLineup.displayIcon && (
                                            <div className="p-2 2xl:p-5 bg-valo30 rounded-sm flex flex-row w-full space-x-5">
                                                <Image src={selectLineup.displayIcon} alt={selectLineup.ability} className="w-8 h-8 2xl:w-14 2xl:h-14" width={50} height={40} />
                                                <Image src={selectLineup.abilityIcon} alt={selectLineup.ability} className="w-8 h-8 2xl:w-14 2xl:h-14" width={50} height={40} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* Image */}
                                <div className="image-slider relative max-w-[1300px] h-fit">
                                    {selectLineup.images && selectLineup.images.length > 0 && (
                                        <AnimatePresence>
                                            <motion.div
                                                key={imageIndex}
                                                variants={imageSlider}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <Image src={selectLineup.images[imageIndex].url} alt={selectLineup.title} className="lineupImage" width={1300} height={600} />
                                            </motion.div>
                                            <div className="overlay absolute inset-0 flex flex-col w-full h-1/2 justify-between items-end px-8 pt-8">
                                                <div
                                                    className="hoverClose text-base font-bold flex flex-row items-center space-x-3 py-2 px-3 rounded-sm cursor-pointer"
                                                    onClick={() => handleClick(selectLineup)}
                                                >
                                                    <FontAwesomeIcon icon={faXmark} className="text-xl" />
                                                    <p>Close</p>
                                                </div>
                                                <div className="flex flex-row w-full justify-between items-center">
                                                    {imageIndex > 0 && (
                                                        <div
                                                            className={`flex flex-row justify-start items-center py-2 px-4 rounded-sm text-dark bg-dark hoverIconButton-valo cursor-pointer ${imageIndex > 0 ? 'w-fit' : 'w-full'}`} 
                                                            onClick={prevButton}
                                                        >
                                                            <FontAwesomeIcon icon={faAngleLeft} className="text-4xl" />
                                                        </div>
                                                    )}
                                                    {
                                                        imageIndex < selectLineup.images.length -1 && (
                                                            <div
                                                                className={`flex flex-row justify-end items-center py-2 px-4 rounded-sm text-dark bg-dark hoverIconButton-valo cursor-pointer ${imageIndex < selectLineup.images.length - 1  ? 'w-fit ml-auto' : 'w-full'}`}
                                                                onClick={nextButton}
                                                            >
                                                                <FontAwesomeIcon icon={faAngleRight} className="text-4xl" />
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </AnimatePresence>
                                        
                                        
                                    )}
                                    
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    )
}