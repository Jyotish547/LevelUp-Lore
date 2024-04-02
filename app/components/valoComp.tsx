'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import { AgentData } from "./types/valorantType"
import { MapData } from "./types/valorantType";
import Image from "next/image";
import Link from "next/link";

export const AgentList: React.FC = () => {
    const [agentData, setAgentData] = useState<(AgentData & { defaultAbility: string })[]>([]);

    useEffect(() => {
        const fetchAgentData = async () => {
            try {
                const response = await axios.get<{data: AgentData[]}, any>(`/api/valorant/allAgents`);
                const dataWithSelectedDesc = response.data.data.map((agent: AgentData) => ({
                    ...agent,
                    defaultAbility: agent.abilities[0]?.description || ''
                }))
                setAgentData(dataWithSelectedDesc);
                console.log(dataWithSelectedDesc);

            }
            catch(error) {
                console.log('Unable to Fetch Agent Details', error);
            }
        }
        fetchAgentData();
    }, []);

    const abilityClick = (agentIndex: number, description: string) => {
        setAgentData(currentData =>
            currentData.map((agent, index) => 
                index === agentIndex ? { ...agent, defaultAbility: description } : agent
            ))
    };

    const [expandedId, setExpandedId] = useState<number | null>(null);

    return(
        <div className='grid grid-cols-2 grid-flow-row gap-12 w-full'>
            {agentData.map((agent: any, index: any) => (
                agent.isPlayableCharacter && (
                    <div
                        key={index}
                        className={`flex p-6 valo-background shadow-md shadow-violet-400/30 rounded-lg ${expandedId === agent.uuid ? 'col-span-2 row-span-2 w-full' : 'col-span-1 row-span-1 w-fit'}`}
                        onClick={() => setExpandedId(expandedId === agent.uuid ? null : agent.uuid)}
                        >
                        {
                            expandedId !== agent.uuid && (
                                <div className="flex flex-row w-full">
                                    <Image src={agent.fullPortrait} alt={agent.displayName} width={500} height={500} style={{overflow: 'hidden', clipPath: 'rect(auto 220px auto 50px)'}} />
                                    <div className="flex flex-col h-full justify-between w-full">
                                        <span className="font-semibold text-valo text-2xl tracking-wider">{agent.displayName.toUpperCase()}</span>
                                        <div className="flex flex-row space-x-2 items-center">
                                            <Image src={agent.role.displayIcon} alt={agent.role.displayName} width={24} height={24} />
                                            <p className="text-lg">{agent.role.displayName}</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between border-b-2 border-valo">
                                            {agent.abilities.slice(0, 4).map((ability: any, abilityIndex: any) => (
                                                <div key={abilityIndex} className={`p-4 cursor-pointer ${agent.defaultAbility === ability.description ? 'bg-valo' : ''}`} onClick={() => abilityClick(index, ability.description)}>
                                                    <Image src={ability.displayIcon} alt={agent.displayName} width={30} height={30} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-wrap line-clamp-3 w-full">
                                            {agent.defaultAbility}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            expandedId === agent.uuid && (
                                <div className="flex flex-col justify-between w-full h-fit">
                                    <div className="flex flex-row w-full justify-between items-center">
                                        <Image src={agent.fullPortrait} alt={agent.displayName} width={500} height={500}style={{overflow: 'hidden', clipPath: 'rect(auto 450px auto 50px)'}} />
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
                                                    <Image src={agent.role.displayIcon} alt={agent.role.displayName} width={30} height={30} />
                                                    <span className="font-medium text-white text-2xl">{agent.role.displayName}</span>
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
                                                        <div className="flex flex-row items-center space-x-3">
                                                            <span className={`font-bold ${abilityIndex === 3 ? 'text-intermediate' : ' text-valo'}`}>{prefix}</span>
                                                            <Image key={abilityIndex} src={ability.displayIcon} alt={ability.displayName} width={40} height={40} />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <span className="font-light text-sm">*These are default key bindings</span>
                                        </div>
                                        <Image src={agent.background} alt={agent.displayName} width={200} height={500} />
                                    </div>
                                    <hr className="border-valo my-8"/>
                                    <div className="grid grid-cols-2 grid-flow-row gap-8 px-4">
                                        {agent.abilities.slice(0, 4).map((ability: any, abilityIndex: number) => (
                                            <div key={abilityIndex} className="flex flex-col space-y-4">
                                                <div className="flex flex-row space-x-3 items-center">
                                                    <div className={`p-3 cursor-pointer rounded-md ${abilityIndex === 3 ? 'bg-intermediate' : 'bg-valo'}`}>
                                                        <Image src={ability.displayIcon} alt={agent.displayName} width={30} height={30} />
                                                    </div>
                                                    <p className={`font-semibold text-valo text-2xl ${abilityIndex === 3 ? 'text-intermediate' : 'text-valo'}`}>{ability.displayName}</p>
                                                </div>
                                                <p>
                                                    {ability.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            ))}
        </div>
    )
}

export const MapList: React.FC = () => {

    const [mapData, setMapData] = useState<MapData[]>([]);

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                const response = await axios.get<{data: MapData[]}, any>(`/api/valorant/allMaps`);
                setMapData(response.data.data);
                // console.log(response.data.data);
            }
            catch(error) {
                console.log('Unable to Fetch Map Details', error);
            }
        }
        fetchMapData();
    }, []);

    return(
        <div>
            {mapData.map((map: any, index: number) => (
                <div key={index}>
                    {map.displayName}
                </div>
            ))}
        </div>
    );
}