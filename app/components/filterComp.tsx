'use client'
import React, { useState, useEffect } from "react";

import '../globals.css'

import BorderButton from "./buttons";
import { IconButton } from "./buttons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEarthAmericas, faMars, faMarsAndVenus, faPlaneUp, faShieldHalved, faStar, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const iconsMap: { [key: string]: IconProp } = {
    star: faStar,
    defense: faShieldHalved
}

import { FormType, DiffType, CardsType, GenType, PlayersData } from "./types/fc24Type";
import { getBgColorClass } from "./cardLayouts";
import axios from "axios";

export const F1Filter: React.FC<{ selectForm: FormType[], setSelectForm: React.Dispatch<React.SetStateAction<FormType[]>>, selectDiff: DiffType[], setSelectDiff: React.Dispatch<React.SetStateAction<DiffType[]>> }> = ({ selectForm, setSelectForm, selectDiff, setSelectDiff }) => {

    const [isPopular, setIsPopular] = useState<boolean>(false);

    const togglePopular = () => setIsPopular(!isPopular);

    const handleForm = (form: FormType) => {
        setSelectForm(prevForm =>
            prevForm.includes(form) ? prevForm.filter(f => f !== form) : [...prevForm, form]
        );
    };

    const handleDiff = (diff: DiffType) => {
        setSelectDiff(prevDiff => 
            prevDiff.includes(diff) ? prevDiff.filter(d => d !== diff) : [...prevDiff, diff]
        );
    };

    function getBackgroundForm(form: FormType): string {
        switch (form) {
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
    function getBackgroundDiff(diff: DiffType): string {
        switch (diff) {
            case 'Beginner':
                return 'bg-beginner';
            case 'Intermediate':
                return 'bg-intermediate';
            case 'Advanced':
                return 'bg-advanced';
            default:
                return '';
        }
    }
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

    return(
        <div className="flex flex-row justify-between items-center formation-filters w-full h-fit">
            {/* Filters */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-intermediate font-semibold">Filters:</h3>
                <IconButton
                    label="Popular"
                    icon={iconsMap['star']}
                    onClick={togglePopular}
                    className={`flex flex-row items-center py-2 px-4 rounded-md border-2 border-intermediate font-semibold space-x-2 ${isPopular ? 'popular-f1 active-f1 bg-intermediate shadow-md shadow-emerald-700/50 text-dark': 'bg-black'}`}
                />
            </div>
            
            {/* Form */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-eafc font-semibold">Style:</h3>
                <div className="flex flex-row justify-between items-center w-fit h-full rounded-md shadow-md shadow-gray-800/50">
                    {(['Defensive', 'Balanced', 'Offensive'] as FormType[]).map((form, index)=> (
                        <button
                            key={form}
                            onClick={() => handleForm(form)}
                            className={
                                `py-2 px-4 border-r-2 border-gray-800 space-x-2 h-full bg-clip-padding
                                ${selectForm.includes(form) ? getBackgroundForm(form) : ''}
                                ${index === 0 && selectForm.includes(form) ? 'rounded-l-md' : ''}
                                ${index === 2 ? 'rounded-r-md border-none' : ''}
                                `}
                        >
                            <FontAwesomeIcon icon={getIconForm(form)} />
                            <span>{form}</span>
                        </button>
                    ))}
                </div>
            </div>
            {/* Difficulty */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-eafc font-semibold">Complexity:</h3>
                <div className="flex flex-row font-medium justify-between items-center w-fit h-full rounded-md shadow-md shadow-gray-800/50">
                    {(['Beginner', 'Intermediate', 'Advanced'] as DiffType[]).map((diff, index) => (
                        <button
                            key={diff}
                            onClick={() => handleDiff(diff)}
                            className={
                                `py-2 px-4  border-r-2 border-gray-800 space-x-2 h-full bg-clip-padding
                                ${selectDiff.includes(diff) ? `text-dark ${getBackgroundDiff(diff)}` : 'text-white'}
                                ${index === 0 && selectDiff.includes(diff) ? 'rounded-l-md' : ''}
                                ${index === 2 ? 'rounded-r-md border-none' : ''}
                                `}
                        >
                            <FontAwesomeIcon icon={getIconDiff(diff)} />
                            <span>{diff}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div> 
    )
}

interface F2Props {
    gen: string;
    setGen: (gen: string) => void;
}

import { LeagueFilter } from "./types/fc24Type";

export const F2Filter: React.FC<F2Props> = ({ gen, setGen }) => {
    
    // const [natId, setNatId] = useState<number | null>(null);
    // const [leaId, setLeaId] = useState<number | null>(null);


    // const [leagueData, setLeagueData] = useState<LeagueFilter>({
    //     clubs: [],
    //     leagues: [],
    //     nations: []
    //   });
    
    // const [cache, setCache] = useState<{ [key: string]: LeagueFilter }>({});

    // useEffect(() => {
    //     const fetchLeagueData = async() => {
    //         const cacheKey = 'allFilters';
    //         if (cache[cacheKey]) {
    //             setLeagueData(cache[cacheKey]);
    //             return;
    //         }
    //         try {
    //             const response = await axios.get<LeagueFilter>(`/api/fc24/allFilters`);
    //             setLeagueData(response.data);
    //             setCache(currentCache => ({
    //                 ...currentCache,
    //                 [cacheKey]: response.data
    //             }));
    //         }
    //         catch(error) {
    //             console.error('Error fetching league data:', error);
    //         }
    //     }
    //     fetchLeagueData();
    // }, [])
    // console.log(leagueData);

    function getIconGen(gen: GenType): IconProp {
        switch (gen) {
            case GenType.All:
                return faMarsAndVenus;
            case GenType.MensFootball:
                return faMars;
            case GenType.WomensFootball:
                return faVenus;
            default:
                return faStar;
        }
    }
    // function getIconDiff(form: DiffType): IconProp {
    //     switch (form) {
    //         case 'Beginner':
    //             return faShieldHalved;
    //         case 'Intermediate':
    //             return faStar;
    //         case 'Advanced':
    //             return faPlaneUp;
    //         default:
    //             return faStar;
    //     }
    // }

    // Nation change
    // const natChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const nationId = parseInt(e.target.value);
    //     setNatId(nationId);
    //     setLeaId(null);
    // }

    // // League change
    // const leaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const leagueId = parseInt(e.target.value);
    //     setLeaId(leagueId);
    // }

    // const filterLea = leagueData.leagues.filter(league => league.nationId === natId);
    // const filterClub = leagueData.clubs.filter(club => club.league === leaId);

    return(
        <div className="flex flex-row justify-between items-center formation-filters w-full h-fit">
            {/* Filters */}
            {/* Gender */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-intermediate font-semibold">Filters:</h3>
                <div
                    
                    className={
                        `flex flex-row items-stretch rounded-md border-2 border-intermediate font-semibold
                        ${'popular-f1 active-f1 shadow-md shadow-emerald-700/50 bg-black'}
                    `}
                >
                    {Object.values(GenType).map((genValue, index) => (
                        <label
                            key={index}
                            className={
                                ` flex flex-row text-lg py-3 px-4 items-center text-sm font-regular border-r-2 border-gray-800 space-x-2 appearance-none
                                ${gen === genValue ? `text-dark bg-intermediate` : `text-white`}
                                ${index === 0 ? 'rounded-l-md' : ''}
                                ${index === Object.values(GenType).length - 1 ? 'rounded-r-md border-none' : ''}
                                `}
                        >
                            <FontAwesomeIcon icon={getIconGen(genValue)} />
                            <input
                                type="radio"
                                name="type"
                                value={genValue}
                                onChange={(e) => setGen(e.target.value)}
                                checked={gen === genValue}
                                className=
                                {`appearance-none`}
                            />
                            {genValue}
                        </label>
                    ))}
                </div>
            </div>
            {/* League */}
            
        </div> 
    )
}

// interface F3Props {
//     selectRate: RateType[];
//     setSelectRate: (gen: RateType[]) => void;
// }

import { RateType } from "./types/fc24Type";

export const F3Filter: React.FC<{ selectRate: RateType[], setSelectRate: React.Dispatch<React.SetStateAction<RateType[]>> }> = ({ selectRate, setSelectRate }) => {
    
    // const [natId, setNatId] = useState<number | null>(null);
    // const [leaId, setLeaId] = useState<number | null>(null);


    // const [leagueData, setLeagueData] = useState<LeagueFilter>({
    //     clubs: [],
    //     leagues: [],
    //     nations: []
    //   });
    
    // const [cache, setCache] = useState<{ [key: string]: LeagueFilter }>({});

    // useEffect(() => {
    //     const fetchLeagueData = async() => {
    //         const cacheKey = 'allFilters';
    //         if (cache[cacheKey]) {
    //             setLeagueData(cache[cacheKey]);
    //             return;
    //         }
    //         try {
    //             const response = await axios.get<LeagueFilter>(`/api/fc24/allFilters`);
    //             setLeagueData(response.data);
    //             setCache(currentCache => ({
    //                 ...currentCache,
    //                 [cacheKey]: response.data
    //             }));
    //         }
    //         catch(error) {
    //             console.error('Error fetching league data:', error);
    //         }
    //     }
    //     fetchLeagueData();
    // }, [])
    // console.log(leagueData);

    // function getIconGen(rate: RateType): IconProp {
    //     switch (gen) {
    //         case GenType.All:
    //             return faMarsAndVenus;
    //         case GenType.MensFootball:
    //             return faMars;
    //         case GenType.WomensFootball:
    //             return faVenus;
    //         default:
    //             return faStar;
    //     }
    // }
    // function getIconDiff(form: DiffType): IconProp {
    //     switch (form) {
    //         case 'Beginner':
    //             return faShieldHalved;
    //         case 'Intermediate':
    //             return faStar;
    //         case 'Advanced':
    //             return faPlaneUp;
    //         default:
    //             return faStar;
    //     }
    // }

    // Nation change
    // const natChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const nationId = parseInt(e.target.value);
    //     setNatId(nationId);
    //     setLeaId(null);
    // }

    // // League change
    // const leaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const leagueId = parseInt(e.target.value);
    //     setLeaId(leagueId);
    // }

    // const filterLea = leagueData.leagues.filter(league => league.nationId === natId);
    // const filterClub = leagueData.clubs.filter(club => club.league === leaId);

    const handleRate = (rate: RateType) => {
        setSelectRate(prevRate =>
            prevRate.includes(rate) ? prevRate.filter(r => r !== rate) : [...prevRate, rate]
        );
    };

    function getBackgroundRate(rate: RateType): string {
        switch (rate) {
            case '2':
                return 'bg-eafc';
            case '3':
                return 'bg-intermediate';
            case '4':
                return 'bg-advanced';
            default:
                return '';
        }
    }

    return(
        <div className="flex flex-row justify-between items-center formation-filters w-full h-fit">
            {/* Filters */}
            {/* Gender */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-eafc font-semibold">Rating:</h3>
                <div className="flex flex-row justify-between items-center w-fit h-full rounded-md shadow-md shadow-gray-800/50">
                    {(['2', '3', '4'] as RateType[]).map((rate, index)=> (
                        <button
                            key={index}
                            onClick={() => handleRate(rate)}
                            className={
                                `py-2 px-4 border-r-2 border-gray-800 space-x-2 h-full bg-clip-padding font-semibold flex flex-row items-center
                                ${selectRate.includes(rate) ? `${getBackgroundRate(rate)} text-dark` : 'text-white'}
                                ${index === 0 && selectRate.includes(rate) ? 'rounded-l-md' : ''}
                                ${index === 2 ? 'rounded-r-md border-none' : ''}
                                `}
                        >
                            <FontAwesomeIcon icon={faStar} />
                            <span className="">{rate[0]} Star</span>
                        </button>
                    ))}
                </div>
            </div>
            {/* League */}
            
        </div> 
    )
}

interface V1Props {
    selectRole: string;
    setSelectRole: (selectRole: string) => void;
}

import { Ability, AgentData, AgentFilter, MapData, MapFilter, RoleType } from "./types/valorantType";

import sentinel from "../../public/assets/valorant/roles/Sentinel.png";
import controller from "../../public/assets/valorant/roles/Controller.png";
import duelist from "../../public/assets/valorant/roles/Duelist.png";
import initiator from "../../public/assets/valorant/roles/Initiator.png";
import { StaticImageData } from "next/image";

import Image from "next/image";

interface V2Props {
    selectMap: string;
    setSelectMap: (selectRole: string) => void;
    selectAgent: string;
    setSelectAgent: (selectRole: string) => void;
    selectAbility: string;
    setSelectAbility: (selectRole: string) => void;
    selectSide: string;
    setSelectSide: (selectRole: string) => void;
}

export const V1Filter: React.FC<V1Props> = ({ selectRole, setSelectRole }) => {
    
    // const [isOpen, setIsOpen] = useState(false);

    function getIconRole(role: string): StaticImageData {
        switch (role) {
            case 'Initiator':
                return initiator;
            case 'Duelist':
                return duelist;
            case 'Controller':
                return controller;
            case 'Sentinel':
                return sentinel;
            default:
                return duelist;
        }
    }

    // const toggleDropdown = () => setIsOpen(!isOpen);
    // const handleSelectRole = (role: RoleType[]) => {
    //     setSelectRole(role);
    //     setIsOpen(false);
    // }

    return(
        <div className="flex flex-row justify-between items-center formation-filters w-full h-fit">
            {/* Filters */}
            {/* Gender */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-intermediate font-semibold">Filters:</h3>
                <div
                    
                    className={
                        `flex flex-row items-stretch rounded-md border-2 border-intermediate font-semibold
                        ${'popular-f1 active-f1 shadow-md shadow-emerald-700/50 bg-black w-full'}
                    `}
                >
                    {(['All', 'Initiator', 'Duelist', 'Controller', 'Sentinel']).map((role, index) => (
                        <label
                            key={index}
                            className={
                                `text-lg flex flex-row text-lg py-3 px-4 items-center text-sm font-regular border-r-2 border-gray-800 space-x-2
                                ${selectRole === role ? 'bg-intermediate text-dark' : ''}
                                `}
                        >
                            {index === 0 ? (<FontAwesomeIcon icon={faEarthAmericas} className="text-xl" />) : (<Image src={getIconRole(role)} alt={role} width={25} height={25} />)}
                            
                            <input
                                type="radio"
                                name="type"
                                value={role}
                                onChange={(e) => setSelectRole(e.target.value)}
                                checked={selectRole === role}
                                className={`appearance-none`}
                            />
                            {role}
                        </label>
                    ))}
                </div>
            </div>
            {/* League */}
            
        </div> 
    )
}

interface V2Props {
    selectMap: string;
    setSelectMap: (selectRole: string) => void;
    selectAgent: string;
    setSelectAgent: (selectRole: string) => void;
    selectAbility: string;
    setSelectAbility: (selectRole: string) => void;
    selectSide: string;
    setSelectSide: (selectRole: string) => void;
}
export const V2Filter: React.FC<V2Props> = ({ selectMap, setSelectMap, selectAgent, setSelectAgent, selectAbility, setSelectAbility, selectSide, setSelectSide }) => {
    
    // const [isOpen, setIsOpen] = useState(false);

    function getIconRole(role: string): StaticImageData {
        switch (role) {
            case 'Initiator':
                return initiator;
            case 'Duelist':
                return duelist;
            case 'Controller':
                return controller;
            case 'Sentinel':
                return sentinel;
            default:
                return duelist;
        }
    }

    const [maps, setMaps] = useState<MapFilter[]>([]);
    const [agents, setAgents] = useState<AgentData[]>([]);
    // Not needed once refer
    // const [ability, setAbility] = useState<Ability[]>([]);
    const [side, setSide] = useState<boolean>(false);

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                const response = await axios.get<{data: MapFilter[]}, any>(`/api/valorant/allMaps`);
                const filter = response.data.map((map: MapFilter) => ({
                    displayName: map.displayName,
                    splash: map.splash
                }));
                setMaps(filter);
            } catch(error) {
                console.log('Error fetching filter map data', error);
            }
        }
        const fetchAgentData = async () => {
            try {
                const response = await axios.get<{data: AgentFilter[]}, any>(`/api/valorant/allAgents`);
                const filter = response.data.map((agent: AgentFilter) => ({
                    displayName: agent.displayName,
                    displayIcon: agent.displayIcon,
                    abilities: agent.abilities,
                }));
                setAgents(filter);
            } catch(error) {
                console.log('Error fetching filter agent data', error);
            }
        }

        fetchMapData();
        fetchAgentData()
    }, [])

    // console.log(maps);

    // const toggleDropdown = () => setIsOpen(!isOpen);
    // const handleSelectRole = (role: RoleType[]) => {
    //     setSelectRole(role);
    //     setIsOpen(false);
    // }

    return(
        <div className="flex flex-row justify-between items-center formation-filters w-full h-fit">
            {/* Filters */}
            {/* Gender */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-intermediate font-semibold">Map:</h3>
                <div
                    
                    className={
                        `flex flex-row items-stretch rounded-md border-2 border-intermediate font-semibold
                        ${'popular-f1 active-f1 shadow-md shadow-emerald-700/50 bg-black w-full'}
                    `}
                >
                    {/* {(['All', 'Initiator', 'Duelist', 'Controller', 'Sentinel']).map((role, index) => (
                        // <label
                        //     key={index}
                        //     className={
                        //         `text-lg flex flex-row text-lg py-3 px-4 items-center text-sm font-regular border-r-2 border-gray-800 space-x-2
                        //         ${selectRole === role ? 'bg-intermediate text-dark' : ''}
                        //         `}
                        // >
                        //     {index === 0 ? (<FontAwesomeIcon icon={faEarthAmericas} className="text-xl" />) : (<Image src={getIconRole(role)} alt={role} width={25} height={25} />)}
                            
                        //     <input
                        //         type="radio"
                        //         name="type"
                        //         value={role}
                        //         onChange={(e) => setSelectRole(e.target.value)}
                        //         checked={selectRole === role}
                        //         className={`appearance-none`}
                        //     />
                        //     {role}
                        // </label>
                    ))} */}
                    {maps.map((map, index) => (
                        <label
                            key={index}
                            className={
                            `text-lg flex flex-row text-lg py-3 px-4 items-center text-sm font-regular border-r-2 border-gray-800 space-x-2
                            
                            `}
                        >
                            <Image src={map.splash} alt={map.displayName} width={100} height={100} />
                            <input
                                type="radio"
                                name="maps"
                                value={map.displayName}
                                
                            />
                            {map.displayName}
                        </label>
                    ))}
                </div>
            </div>
            
        </div> 
    )
}

