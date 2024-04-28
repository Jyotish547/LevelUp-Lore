'use client'
import React, { useState, useEffect } from "react";

import '../globals.css'

import BorderButton from "./buttons";
import { IconButton } from "./buttons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEarthAmericas, faFire, faFireFlameCurved, faMars, faMarsAndVenus, faPlaneUp, faShieldHalved, faStar, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const iconsMap: { [key: string]: IconProp } = {
    star: faStar,
    defense: faShieldHalved
}

import { FormType, DiffType, CardsType, GenType, PlayersData } from "./types/fc24Type";
import { getBgColorClass } from "./cardLayouts";
import axios from "axios";

import { getIconForType, getIconForDifficulty } from "../game/fc24/formations/[id]/page";

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
    function getDefaulForm(form: FormType): string {
        switch (form) {
            case 'Balanced':
                return 'bg-balanced30';
            case 'Offensive':
                return 'bg-offensive30';
            case 'Defensive':
                return 'bg-defensive30';
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
    
    function getDefaultDiff(diff: DiffType): string {
        switch (diff) {
            case 'Beginner':
                return 'bg-beginner30';
            case 'Intermediate':
                return 'bg-intermediate30';
            case 'Advanced':
                return 'bg-advanced30';
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
                <h3 className="text-eafc font-semibold">Filters:</h3>
                <IconButton
                    label="Popular"
                    icon={faFireFlameCurved}
                    onClick={togglePopular}
                    className={`flex flex-row items-center py-2 px-4 font-semibold space-x-2 rounded-sm ${isPopular ? 'popular-f1 active-f1 bg-amber-500 text-dark': 'hoverPopular-eafc text-neutral-500'}`}
                />
            </div>
            
            {/* Form */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-eafc font-semibold">Style:</h3>
                <div className="flex flex-row justify-between items-center w-fit h-full">
                    {(['Defensive', 'Balanced', 'Offensive'] as FormType[]).map((form, index)=> (
                        <button
                            key={index}
                            onClick={() => handleForm(form)}
                            className={
                                `py-2 px-4 border-r-2 border-gray-800 space-x-2 h-full bg-clip-padding
                                ${selectForm.includes(form) ? getBackgroundForm(form) : `${getDefaulForm(form)} text-neutral-500`}
                                ${index === 0 ? 'rounded-l-sm' : ''}
                                ${index === 2 ? 'border-none' : 'rounded-r-sm'}
                                `}
                        >
                            <FontAwesomeIcon icon={getIconForType(form.toLowerCase())} />
                            <span>{form}</span>
                        </button>
                    ))}
                </div>
            </div>
            {/* Difficulty */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-eafc font-semibold">Complexity:</h3>
                <div className="flex flex-row font-medium justify-between items-center w-fit h-full">
                    {(['Beginner', 'Intermediate', 'Advanced'] as DiffType[]).map((diff, index) => (
                        <button
                            key={diff}
                            onClick={() => handleDiff(diff)}
                            className={
                                `py-2 px-4  border-r-2 border-gray-800 space-x-2 h-full bg-clip-padding
                                ${selectDiff.includes(diff) ? `text-dark ${getBackgroundDiff(diff)}` : `${getDefaultDiff(diff)} text-neutral-500`}
                                ${index === 0 ? 'rounded-l-sm' : ''}
                                ${index === 2 ? 'border-none' : 'rounded-r-sm'}
                                `}
                        >
                            <FontAwesomeIcon icon={getIconForDifficulty(diff.toLowerCase())} />
                            <span className="opacity-100">{diff}</span>
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

    // League Filter - Scope
    
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

    return(
        <div className="flex flex-row justify-between items-center formation-filters w-full h-fit">
            {/* Filters */}
            {/* Gender */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-eafc font-semibold">Filters:</h3>
                <div
                    
                    className={
                        `flex flex-row items-stretch font-semibold rounded-sm
                        ${'popular-f1 active-f1'}
                    `}
                >
                    {Object.values(GenType).map((genValue, index) => (
                        <label
                            key={index}
                            className={
                                ` flex flex-row text-lg py-3 px-4 ${gen ? 'text-neutral-400' : ''} bg-[#22C55E40] items-center hoverButton-eafc text-sm font-regular border-r-2 border-gray-800 space-x-2
                                ${gen === genValue ? `bg-eafc text-dark` : ``}
                                ${index === 0 ? 'rounded-sm' : ''}
                                ${index === Object.values(GenType).length - 1 ? 'border-none' : ''}
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
    
    const handleRate = (rate: RateType) => {
        setSelectRate(prevRate =>
            prevRate.includes(rate) ? prevRate.filter(r => r !== rate) : [...prevRate, rate]
        );
    };

    function getBackgroundRate(rate: RateType): string {
        switch (rate) {
            case '2':
                return 'bg-lime-500 text-dark';
            case '3':
                return 'bg-intermediate text-dark';
            case '4':
                return 'bg-rose-700';
            default:
                return '';
        }
    }

    function getDefaultRate(rate: RateType): string {
        switch (rate) {
            case '2':
                return 'bg-2skill30 text-neutral-500';
            case '3':
                return 'bg-3skill30 text-neutral-500';
            case '4':
                return 'bg-4skill30 text-neutral-500';
            default:
                return '';
        }
    }

    return(
        <div className="flex flex-row justify-between items-center formation-filters w-full h-fit">
            {/* Filters */}
            {/* Rating */}
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-eafc font-semibold">Rating:</h3>
                <div className="flex flex-row justify-between items-center w-fit h-full">
                    {(['2', '3', '4'] as RateType[]).map((rate, index)=> (
                        <button
                            key={index}
                            onClick={() => handleRate(rate)}
                            className={
                                `py-2 px-4 border-r-2 border-gray-800 space-x-2 h-full bg-clip-padding font-semibold flex flex-row items-center
                                ${selectRate.includes(rate) ? `${getBackgroundRate(rate)}` : `${getDefaultRate(rate)}`}
                                ${index === 0 ? 'rounded-l-sm' : ''}
                                ${index === 2 ? 'rounded-r-sm border-none' : ''}
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
                <h3 className="text-valo font-semibold">Filters:</h3>
                <div
                    
                    className={
                        `flex flex-row items-stretch rounded-sm font-semibold
                        ${'popular-f1 active-f1 w-full'}
                    `}
                >
                    {(['All', 'Initiator', 'Duelist', 'Controller', 'Sentinel']).map((role, index) => (
                        <label
                            key={index}
                            className={
                                `hoverImageFilter text-sm flex flex-row py-3 px-4 items-center font-regular border-r-2 border-gray-800 space-x-2
                                ${selectRole === role ? 'bg-valo text-dark' : 'text-neutral-500 bg-valo30'}
                                ${index === 0 ? 'rounded-l-sm' : ''}
                                ${selectRole === role && index === 0 ? 'rounded-l-sm text-dark' : ''}
                                ${index === 4 ? 'rounded-r-sm border-none' : ''}
                                `}
                        >
                            {index === 0 ? (<FontAwesomeIcon icon={faEarthAmericas} className="text-xl" />) : (<Image src={getIconRole(role)} className={`${selectRole === role ? 'opacity-100 brightness-0' : 'opacity-30'}`} alt={role} width={20} height={20} />)}
                            
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

    const matchAgent = agents.find(a => a.displayName === selectAgent && a.isPlayableCharacter);
    console.log(matchAgent);

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                const response = await axios.get<{data: MapFilter[]}, any>(`/api/valorant/allMaps`);
                const filter = response.data.map((map: MapFilter) => ({
                    displayName: map.displayName,
                    splash: map.splash,
                    narrativeDescription: map.narrativeDescription,
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
                    isPlayableCharacter: agent.isPlayableCharacter
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
        <div className="flex bg-neutral-950 p-6 rounded-md flex-row justify-between items-center shadow-md shadow-violet-500/40 formation-filters w-full h-full space-x-8 text-neutral-300">
            {/* Filters */}
            {/* Maps */}
            <div className="flex flex-col w-fit items-start space-y-4">
                <h3 className="text-valo font-semibold">Map:</h3>
                <div
                    
                    className={
                        `flex flex-col w-56 scrollbar-custom h-96 overflow-y-scroll rounded-md
                        ${'popular-f1 active-f1'}
                    `}
                >
                    <label
                        className={
                        `hover-valo text-lg flex flex-row w-11/12 py-3 px-6 items-center font-regular space-x-2
                        ${selectMap === 'All' ? 'border-l-2 border-valo text-valo bg-valo30 font-semibold' : ''}
                        `}
                    >
                        <input
                            type="radio"
                            name="maps"
                            value='All'
                            className={`appearance-none`}
                            onChange={(e) => setSelectMap(e.target.value)}
                            checked={selectMap === 'All'}
                        />
                        Any
                    </label>
                    {maps.map((map, index) => (
                            map.narrativeDescription && (
                                <label
                                    key={index}
                                    className={
                                        `hover-valo text-lg flex flex-row w-11/12 py-3 px-6 items-center font-regular space-x-2
                                        ${selectMap === map.displayName ? 'border-l-2 border-valo text-valo bg-valo30 font-semibold border-b-0' : ''}
                                        ${map.displayName === 'Breeze' || map.displayName === 'Ascent' ? 'border-b-2 border-teal-500' : ''}
                                        `}
                                >
                                    <input
                                        type="radio"
                                        name="maps"
                                        value={map.displayName}
                                        className={`appearance-none`}
                                        onChange={(e) => setSelectMap(e.target.value)}
                                        checked={selectMap === map.displayName}
                                    />
                                    {map.displayName}
                                </label>
                            )
                    ))}
                </div>
            </div>
            {/* Sub filter div */}
            <div className="flex flex-col w-full items-start justify-between h-full">
                {/* Agents */}
                <div className="flex flex-col items-start space-y-4">
                    <h3 className="text-valo font-semibold">Agent:</h3>
                    <div
                        
                        className={
                            `flex flex-row flex-wrap items-center justify-start rounded-md border-valo font-semibold
                            ${'popular-f1 active-f1'}
                        `}
                    >
                        {agents.map((agent, index) => (
                                agent.isPlayableCharacter && (
                                    <label
                                        key={index}
                                        className={
                                        `text-lg hover-valo-icon flex flex-col w-20 h-20 justify-center items-center p-2 font-regular
                                        ${selectAgent === agent.displayName ? 'border-l-2 border-valo text-valo bg-valo30 border-b-0': ''}
                                        ${agent.displayName === 'Viper' || agent.displayName === 'Brimstone' ? 'border-b-2 border-teal-500 w-fit' : ''}
                                        `}
                                    >
                                        <Image src={agent.displayIcon} alt={agent.displayName} width={60} height={60} />
                                        <input
                                            type="radio"
                                            name="agents"
                                            value={agent.displayName}
                                            className={`appearance-none`}
                                            onChange={(e) => setSelectAgent(e.target.value)}
                                            checked={selectAgent === agent.displayName}
                                        />
                                    </label>
                                )
                        ))}
                    </div>
                </div>

                {/* Abilities */}
                {selectAgent !== 'All' && (
                    <div className="flex flex-col items-start space-y-4">
                        <h3 className="text-valo font-semibold">Ability:</h3>
                        <div
                            
                            className={
                                `flex flex-row items-stretch rounded-md border-valo font-semibold
                                ${'popular-f1 active-f1'}
                            `}
                        >
                            {matchAgent?.abilities.slice(0,4).map((ab, index) => (
                                <label
                                    key={index}
                                    className={
                                        `hover-valo-icon text-lg flex flex-col flex-wrap w-fit py-3 px-4 items-center justify-center font-regular space-x-2
                                        ${selectAbility === ab.displayName ? 'border-l-2 border-valo text-valo bg-valo30': ''}
                                    `}
                                >
                                    <Image src={ab.displayIcon} alt={ab.displayName} width={40} height={40} />
                                    <input
                                        type="radio"
                                        name="abilities"
                                        className={`appearance-none`}
                                        value={ab.displayName}
                                        onChange={(e) => setSelectAbility(e.target.value)}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {/* Side */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-valo font-semibold">Side:</h3>
                    <div
                        className={
                            `flex flex-row items-stretch rounded-md font-semibold
                            ${'popular-f1 active-f1'}
                        `}
                    >
                        {(['Attack', 'Defense']).map((side, index) => (
                            <label
                                key={index}
                                className={
                                `hover-valo-icon text-base flex flex-row w-fit py-3 px-4 items-center font-regular space-x-2
                                ${selectSide === side ? 'border-l-2 border-valo text-valo bg-valo30 font-semibold': ''}
                                `}
                            >
                                <input
                                    type="radio"
                                    name="side"
                                    value={side}
                                    className={`appearance-none`}
                                    onChange={(e) => setSelectSide(e.target.value)}
                                    checked={selectSide === side}
                                />
                                {side}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div> 
    )
}

