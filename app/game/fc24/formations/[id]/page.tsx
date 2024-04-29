import GamePageLayout from "../../../layout";
import { DifficultyTags, TypeTags } from "../../../../components/tags";
import { HeaderBanner } from "../../../../components/banners";

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faPeopleGroup, faShieldHalved } from "@fortawesome/free-solid-svg-icons";


import { SingleFormationData as FormationData } from "@/components/pages/api/formationDetailsByID/[id]";
import { getIconForPosition } from "../../../../components/infoDesign";

import React from "react";

import { motion } from "framer-motion"; 
import { pageItem, pageList, downChild } from "@/components/app/components/animations";

import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faBomb } from "@fortawesome/free-solid-svg-icons";



import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import { getIconForDifficulty } from "../../../../components/infoDesign";

export default async function EAFC24( {params} : {params : {id : string}} ) {

    // The id used to fetch data from on url
    // console.log(params.id);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/formationDetailsByID/${params.id}`);

    const formation = await response.json();
    const { playerInstructions: instructions } = formation as FormationData;
    

    // console.log(instructions);

    // // Sample Console Logs
    // console.log(formation.customTactics.defenseCap)

    const getIconForType = (type: string): IconDefinition => {
        switch(type) {
            case "defensive":
                return faShieldHeart;
            case "balanced":
                return faScaleBalanced;
            case "offensive":
                return faBomb;
            default:
                return faQuestionCircle;
        }
    }

    return  (
        <div className="flex flex-col items-start justify-center w-full space-y-6 leading-relaxed"
            // variants={pageList}
            // initial="hidden"
            // animate="visible"
        >
            {/* Header */}
            <header
            // variants={pageItem}
            className="space-y-4 w-full">
                <div className="space-x-1 font-medium">
                    <Link href="/game/fc24/formations" className="underline underline-offset-4 hoverColor-eafc">Formations</Link> <span>&lt;</span><Link href="#" className="text-eafc">{formation.formation}</Link>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="text-3xl font-semibold flex flex-row items-center space-x-3 text-eafc w-fit">
                        <FontAwesomeIcon icon={faPeopleGroup} /> <span>{formation.formation} Formation</span>
                    </div>
                    <div className="flex flex-row space-x-4 font-medium text-md">
                        <div className="flex flex-row border-eafc border-2 items-center rounded-sm text-eafc">
                            <TypeTags label={formation.flow} bgColor="" textColor="text-eafc" borderColor="" border="" icon={getIconForType(formation.flow.toLowerCase())} />
                        </div>
                        <div className={`flex flex-row border-${formation.difficulty.toLowerCase()} text-${formation.difficulty.toLowerCase()} border-2 items-center rounded-sm`}>
                            <TypeTags label={formation.difficulty} bgColor="" textColor="" borderColor="" border="" icon={getIconForDifficulty(formation.difficulty.toLowerCase())} />
                        </div>
                        
                    </div>
                </div>
                <p className="text-base font-normal">
                    {formation.caption}
                </p>
            </header>

            <hr 
            // variants={pageItem} 
            className="w-full rounded-lg" />

            {/* Content */}
            <div 
            // variants={pageItem} 
            className="flex flex-col items-start w-full text-base">
                <div className="flex flex-col 2xl:flex-row justify-between items-start w-full space-y-8 2xl:space-y-0 2xl:space-x-12">
                    {/* Left Column */}
                    <div 
                    // variants={downChild} 
                    className="flex flex-col w-full space-y-8">
                        <Image src={formation.image} alt={formation.formation} className="w-full" />
                        <div id="tactical-insights" className="flex flex-col space-y-6">
                            <HeaderBanner label="Tactical Insights" style="eafc" />
                            {formation.tacticalTips.split('||').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph.trim()}</p>
                            ))}
                        </div>
                        <div id="advantages" className="flex flex-col space-y-6">
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
                        <div id="disadvantages" className="flex flex-col space-y-6">
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
                    <div 
                    //variants={downChild} 
                    className="flex flex-col w-full space-y-8">
                        <div id="overview" className="flex flex-col space-y-4">
                            <HeaderBanner label="Overview" style="eafc" />
                            {/* Similar way to split paragraphs, add '||' wherever paragraph split required */}
                            {formation.overview.split('||').map((paragraph: string, index: number) => (
                                <p key={index} className="">{paragraph.trim()}</p>
                            ))}
                        </div>
                        {/* Suggested Tactics */}
                        <div id="suggested-tactics" className="flex flex-col space-y-6">
                            <HeaderBanner label="Suggested Tactics" style="intermediate" />
                            <div className="space-y-2">
                                <span className="text-xl flex flex-row items-center text-eafc">
                                    <FontAwesomeIcon icon={faShieldHalved} className="mr-1"/> Defense
                                </span>
                                <p className="  ">
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
                        <div id="player-instructions" className="flex flex-col space-y-6">
                            <HeaderBanner label="Player Instructions" style="intermediate" />
                            <div className="columns-2 gap-12" style={{ gridAutoRows: 'min-content' }}>
                                {Object.entries(instructions).map(([position, instructionsArray]) => (
                                    instructionsArray.length > 0 && ( // Check if instructionsArray is not empty
                                        <div key={position} className="h-fit flex flex-col items-start w-fit gap-3 mb-12">
                                            <h3 className="text-xl flex flex-row items-center space-x-2 py-1 px-2 bg-eafc text-dark w-fit rounded-sm font-semibold">
                                                <FontAwesomeIcon icon={getIconForPosition(position)} />
                                                <span>{position}</span>
                                            </h3>
                                            {instructionsArray.map((instruction, index) => (
                                                    <div key={index} className="space-y-4 text-lg">
                                                        {
                                                            instruction.prop 
                                                            && 
                                                            <h4>{instruction.prop}</h4>
                                                        }
                                                        {
                                                            instruction.value 
                                                            &&
                                                            instruction.value.split('||').map((part: string, index: number) => (
                                                                <p key={index} className="text-xl font-semibold text-eafc">
                                                                    {part}
                                                                </p>
                                                            ))
                                                        }
                                                        {
                                                            instruction.attChange
                                                            && 
                                                            <div className="flex flex-col items-start space-y-4">
                                                                <FontAwesomeIcon icon={faShieldHalved} className="p-1 bg-gray-300 text-dark rounded-sm w-fit" />
                                                                {
                                                                    instruction.attChange.split('||').map((part: string, index: number) => (
                                                                        <p key={index} className="text-xl font-semibold text-eafc">
                                                                            {part}
                                                                        </p>
                                                                    ))                                                            
                                                                }
                                                            </div>
                                                        }
                                                        {
                                                            instruction.defChange 
                                                            && 
                                                            <div className="flex flex-col items-start space-y-4">
                                                                <FontAwesomeIcon icon={faShieldHalved} className="p-1 bg-gray-300 text-dark rounded-sm w-fit" />
                                                                {
                                                                    instruction.defChange.split('||').map((part: string, index: number) => (
                                                                        <p key={index} className="text-xl font-semibold text-eafc">
                                                                            {part}
                                                                        </p>
                                                                    ))                                                            
                                                                }
                                                            </div>
                                                        }
                                                    </div>

                                            ))}
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter Section */}
                <div 
                //variants={downChild}
                className="flex flex-col w-full space-y-8 my-6">
                    <HeaderBanner label={`Countering ${formation.formation} Formation`} style="eafc" />
                    <ul className="list-disc">
                        {formation.counter.map((counter: string, index: number) => {
                            const parts = counter.includes(":") ? counter.split(":") : [counter];
                            return (
                                <li key={index}>
                                    {/* If there's a colon, render the first part bold, and the rest normally */}
                                    {parts.length > 1 ? (
                                        <>
                                            <strong className="text-eafc">{parts[0]}:</strong> {parts.slice(1).join(":")}
                                        </>
                                    ) : (
                                        counter
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Counter Formations */}
                <div
                // variants={downChild} 
                className="flex flex-row w-3/4 text-lg justify-between mb-6">
                    <p className="font-semibold text-eafc">
                        Suggested Counter Formations:
                    </p>
                    {formation.sugFor.map((form: any, index: number) => {
                        return (
                            <p key={index} className="text-xl">
                                {form.form}
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}