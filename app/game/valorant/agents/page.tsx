'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BorderButton from "@/components/app/components/buttons";
import { faChessBoard, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { AgentList } from "@/components/app/components/valoComp";
import { useEffect, useState } from "react";
import { AgentData, AgentDataExtended } from "@/components/app/components/types/valorantType";

import { V1Filter } from "@/components/app/components/filterComp";
import { RoleType } from "@/components/app/components/types/valorantType";


export default function Agents() {

    const [roles, setRoles] = useState<string>('All');
    const [agentData, setAgentData] = useState<(AgentDataExtended & { defaultAbility: string })[]>([]);

    const [filteredData, setFilteredData] = useState<AgentDataExtended[]>([]);

    useEffect(() => {
        const fetchAgentData = async () => {
            try {
                const response = await axios.get<{data: AgentDataExtended[]}, any>(`/api/valorant/allAgents`);
                const dataWithSelectedDesc = response.data.map((agent: AgentDataExtended) => ({
                    ...agent,
                    defaultAbility: agent.abilities[0]?.description || ''
                }))
                setAgentData(dataWithSelectedDesc);
                setFilteredData(dataWithSelectedDesc);

            }
            catch(error) {
                console.log('Unable to Fetch Agent Details', error);
            }
        }
        fetchAgentData();
    }, []);

    console.log(roles);

    const handleSetRole = (roleStr: string) => {
        setRoles(roleStr);
        console.log(roleStr);
    }

    useEffect(() => {
        const filterRole = () => {
            if(roles === 'All' || !roles) {
                setFilteredData(agentData);
            } else {
                setFilteredData(agentData.filter(agent => agent.isPlayableCharacter && agent.role.displayName === roles));
                // console.log(amb);
            }
        }

        filterRole();
    }, [roles]);

    return(
        <section className="flex flex-col items-start justify-center w-full space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 text-valo w-fit">
                    <FontAwesomeIcon icon={faUsersGear} /> <span>Agents</span>
                </div>
                <p className="text-base text-neutral-300 font-normal leading-relaxed">
                    This is an overview of all the game&apos;s characters, detailing their skills and roles. It&apos;s a go-to for players looking to master different agents, providing key information on how to best use each one&apos;s abilities in battle. This page helps players craft strategies and improve their play, making it a vital tool for anyone aiming to excel in Valorant.
                </p>
            </header>

            <hr className="w-full rounded-lg" />
            
            {/* Filters */}
            <V1Filter selectRole={roles} setSelectRole={handleSetRole} />
            
            {/* Card Layout */}
            <AgentList agentData={filteredData} />

        </section>
    )
}