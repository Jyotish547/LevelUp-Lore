'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faBullseye } from "@fortawesome/free-solid-svg-icons";

import { LineupList } from "@/components/app/components/valoComp";

import { fetchLineup } from "@/components/pages/api/valorant/allLineups";

import { AgentData, MapData, LineupData, LineupDatabase } from "@/components/app/components/types/valorantType";

import { useEffect, useState } from "react";

import { V2Filter } from "@/components/app/components/filterComp";

export default function Lineups() {

    // All Data

    const [data, setData] = useState<LineupDatabase>({
        agents: [],
        maps: [],
        lineups: [],
    })

    const [map, setMap] = useState<string>('');
    const [agent, setAgent] = useState<string>('');
    const [ability, setAbility] = useState<string>('');
    const [side, setSide] = useState<string>('');

    // Icons & API Organization

    const prepareLineups = (lineups: LineupData[], agents: AgentData[]): LineupData[] => {
        return lineups.map((lineupData :any) => ({
          ...lineupData,
          agents: lineupData.agents.map((agent: any) => {
            // Matching Agent
            const match = agents.find((a: any) => a.displayName === agent.name);
            
            if(!match) {
                return {
                    ...agent,
                    matchAbility: null,
                };
            }

            // console.log(match);

            return {
              ...agent,
              lineups: agent.lineups.map((lineup: any) => {
                const ability = match?.abilities.find((ab: any) => ab.displayName === lineup.ability)
                return {
                    ...lineup,
                    displayIcon: match ? match.displayIcon : null,
                    abilityIcon: ability ? ability.displayIcon : null,
                }
              })
              
            };
          }),
        }));
      };

    useEffect(() => {
        fetchLineup().then(data => {
            const updatedData = prepareLineups(data.lineups, data.agents);
            setData({
                agents: data.agents,
                maps: data.maps,
                lineups: updatedData,
            })
        });
    });
    


    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-valo w-fit shadow-md shadow-violet-300/30">
                    <FontAwesomeIcon icon={faBullseye} /> <span>Lineups</span>
                </div>
                <p className="text-lg font-normal">
                Lineups are an essential resource for players aiming to optimize their agent&apos;s abilities for maximum impact. This page meticulously compiles images and detailed descriptions of precise ability placements for various agents, focusing on strategic advantages across all maps.
                <br />
                From Sova&apos;s recon arrows to Viper&apos;s toxic screens, the content is designed to enhance your tactical approach and ensure your team gains the upper hand. Explore the lineups to discover new, innovative ways to utilize each agent&apos;s kit effectively, bolstering your gameplay and team strategy in Valoran                </p>
            </header>

            <hr className="w-full rounded-lg" />
            
            {/* Filters */}
            <V2Filter />
            
            {/* Card Layout */}
            <LineupList data={data} />

        </section>
    )
}