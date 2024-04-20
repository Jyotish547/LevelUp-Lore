'use client'
import { useState, useEffect } from "react";

import '../globals.css'

import BorderButton from "./buttons";
import { IconButton } from "./buttons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMars, faMarsAndVenus, faPlaneUp, faShieldHalved, faStar, faVenus } from "@fortawesome/free-solid-svg-icons";
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

export const F3Filter: React.FC<F2Props> = ({ gen, setGen }) => {
    
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

