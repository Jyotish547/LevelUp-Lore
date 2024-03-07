import GamePageLayout from "../layout";
import { DifficultyTags, TypeTags } from "../../components/tags";
import { HeaderBanner } from "../../components/banners";

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faShieldHeart as defensive } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced as balanced } from "@fortawesome/free-solid-svg-icons";
import { faBomb as offensive } from "@fortawesome/free-solid-svg-icons";

import { SingleFormationData as FormationData } from "@/components/pages/api/formationDetailsByID/[id]";
import { getIconForPosition } from "../../components/infoDesign";

const getIconForType = (type: string) => {
    switch(type) {
        case "defensive":
            return defensive;
        case "balanced":
            return balanced;
        case "offensive":
            return offensive;
        default:
            return defaultIcon;
    }
}

import { faStarHalfStroke as beginner } from "@fortawesome/free-regular-svg-icons";
import { faStar as intermediate } from "@fortawesome/free-solid-svg-icons";
import { faRankingStar as advanced } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle as defaultIcon } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const getIconForDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return beginner;
      case "intermediate":
        return intermediate;
      case "advanced":
        return advanced;
      default:
        return defaultIcon; // Or some default icon
    }
};


export default async function EAFC24( {params} : {params : {id : string}}) {

    // The id used to fetch data from on url
    console.log(params.id);
    
    const response = await fetch(`http://localhost:3000/api/formationDetailsByID/${params.id}`);

    const formation = await response.json();
    const { playerInstructions: instructions } = formation as FormationData;

    console.log(instructions);

    // Sample Console Logs
    console.log(formation.customTactics.defenseCap)
      

    return  (
        <div className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4 w-full">
                <div className="space-x-1 font-medium">
                    <Link href="/game" className="underline  underline-offset-4">Formations</Link> <span>&lt;</span><Link href="#" className="text-eafc">{formation.formation}</Link>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-eafc w-fit shadow-md shadow-green-300/30">
                        <FontAwesomeIcon icon={faPeopleGroup} /> <span>{formation.formation} Formation</span>
                    </div>
                    <div className="flex flex-row space-x-4 font-medium text-md">
                        <div className="flex flex-row border-eafc border-2 items-center rounded-md pl-4 text-eafc">
                            <FontAwesomeIcon icon={getIconForType(formation.flow.toLowerCase())} />
                            <TypeTags label={formation.flow} bgColor="" textColor="text-eafc" borderColor="" border="" />
                        </div>
                        <div className={`flex flex-row border-${formation.difficulty.toLowerCase()} text-${formation.difficulty.toLowerCase()} border-2 items-center rounded-md pl-4`}>
                            <FontAwesomeIcon icon={getIconForDifficulty(formation.difficulty.toLowerCase())} />
                            <TypeTags label={formation.difficulty} bgColor="" textColor="" borderColor="" border="" />
                        </div>
                        
                    </div>
                </div>
                <p className="text-lg font-normal">
                    {formation.caption}
                </p>
            </header>

            <hr className="w-full rounded-lg" />

            {/* Content */}
            <div className="flex flex-col items-start w-full">
                <div className="flex flex-row justify-between items-start w-full space-x-12">

                    {/* Left Column */}
                    <div className="flex flex-col w-full space-y-8">
                        <Image src={formation.image} alt={formation.formation} className="w-full" />
                        <div id="tactical-insights" className="flex flex-col space-y-4">
                            <HeaderBanner label="Tactical Insights" style="eafc" />
                            {formation.tacticalTips.split('||').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph.trim()}</p>
                            ))}
                        </div>
                        <div id="advantages" className="flex flex-col space-y-4">
                            <HeaderBanner label="Advantages" style="beginner" />
                            <ul className="list-disc">
                                {formation.advantages.map((advantage: string, index: number) => {
                                    const parts = advantage.includes(":") ? advantage.split(":") : [advantage];
                                    return (
                                        <li key={index}>
                                            {/* If there's a colon, render the first part bold, and the rest normally */}
                                            {parts.length > 1 ? (
                                                <>
                                                    <strong className="text-beginner">{parts[0]}:</strong> {parts.slice(1).join(":")}
                                                </>
                                            ) : (
                                                advantage
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div id="disadvantages" className="flex flex-col space-y-4">
                            <HeaderBanner label="Disadvantages" style="advanced" />
                            <ul className="list-disc">
                                {formation.disadvantages.map((disadvantage: string, index: number) => {
                                    const parts = disadvantage.includes(":") ? disadvantage.split(":") : [disadvantage];
                                    return (
                                        <li key={index}>
                                            {/* If there's a colon, render the first part bold, and the rest normally */}
                                            {parts.length > 1 ? (
                                                <>
                                                    <strong className="text-advanced">{parts[0]}:</strong> {parts.slice(1).join(":")}
                                                </>
                                            ) : (
                                                disadvantage
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div> 

                    {/* Right Column */}
                    <div className="flex flex-col w-full space-y-8">
                        <div id="overview" className="flex flex-col space-y-4">
                            <HeaderBanner label="Overview" style="eafc" />
                            {/* Similar way to split paragraphs, add '||' wherever paragraph split required */}
                            {formation.overview.split('||').map((paragraph: string, index: number) => (
                                <p key={index} className="text-lg">{paragraph.trim()}</p>
                            ))}
                        </div>
                        {/* Suggested Tactics */}
                        <div id="suggested-tactics" className="flex flex-col space-y-4">
                            <HeaderBanner label="Suggested Tactics" style="intermediate" />
                            <div className="space-y-2">
                                <span className="text-xl flex flex-row items-center text-eafc">
                                    <FontAwesomeIcon icon={faShieldHalved} className="mr-1"/> Defense
                                </span>
                                <p className="text-lg">
                                    {formation.customTactics.defenseCap}
                                </p>
                                <div className="flex flex-col text-lg w-full space-y-2">
                                    <div className="flex flex-row justify-between items-center">
                                        <span>Defensive Style:</span><span className="font-semibold text-eafc">{formation.customTactics.defense.style}</span>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <label htmlFor="width-range">Width:</label>                                      
                                        <input id="width-range" type="range" value={formation.customTactics.defense.width} className={`w-2/5 appearance-none my-range range-${formation.customTactics.defense.width}`} disabled />
                                        <span className="font-semibold text-eafc">~{formation.customTactics.defense.width}</span>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <label htmlFor="depth-range">Depth:</label>                                      
                                        <input id="depth-range" type="range" value={formation.customTactics.defense.depth} className={`w-2/5 appearance-none my-range range-${formation.customTactics.defense.depth}`} disabled />
                                        <span className="font-semibold text-eafc">~{formation.customTactics.defense.depth}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Player Instructions */}
                        <div id="player-instructions" className="flex flex-col space-y-4">
                            <HeaderBanner label="Player Instructions" style="intermediate" />
                            <div className="grid grid-cols-2 grid-flow-row gap-8">
                                {Object.entries(instructions).map(([position, instructionsArray]) => (
                                    <div key={position} className="flex flex-col space-y-2">
                                        <h3 className="text-lg flex flex-row items-center space-x-2 py-1 px-2 bg-eafc text-dark w-fit rounded-md font-semibold">
                                            <FontAwesomeIcon icon={getIconForPosition(position)} />
                                            <span>{position}</span>
                                        </h3>
                                        {instructionsArray.map((instruction, index) => (
                                            // {formation.tacticalTips.split('||').map((paragraph: string, index: number) => (
                                            //     <p key={index}>{paragraph.trim()}</p>
                                            // ))}

                                                <div key={index} className="space-y-2">
                                                    {
                                                        instruction.prop 
                                                        && 
                                                        <h4>{instruction.prop.split('||')}</h4>}
                                                    {
                                                        instruction.value 
                                                        && 
                                                        <p className="font-semibold text-eafc">{instruction.value.split('||')}</p>}
                                                    {
                                                        instruction.attChange
                                                        && 
                                                        <div>
                                                            <FontAwesomeIcon icon={faShieldHalved} />
                                                            <p>{instruction.attChange}</p>
                                                        </div>
                                                    }
                                                    {
                                                        instruction.defChange 
                                                        && 
                                                        <div className="flex flex-col items-start space-y-2">
                                                            <FontAwesomeIcon icon={faShieldHalved} className="p-1 bg-gray-300 text-dark rounded-sm w-fit" />
                                                            {
                                                                instruction.defChange.split('||').map((part: string, index: number) => (
                                                                    <p key={index} className="font-semibold text-eafc">
                                                                        {part}
                                                                    </p>
                                                                ))                                                            
                                                            }
                                                            <p>{instruction.defChange}</p>
                                                        </div>
                                                    }
                                                </div>

                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}