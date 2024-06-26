'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faBullseye } from "@fortawesome/free-solid-svg-icons";

import { LineupList } from "@/components/app/components/valoComp";

import { fetchLineup } from "@/components/pages/api/valorant/allLineups";

import { AgentData, MapData, LineupData, LineupDatabase } from "@/components/app/components/types/valorantType";

import { useEffect, useState } from "react";

import { V2Filter } from "@/components/app/components/filterComp";

import { motion } from "framer-motion";
import { pageItem, pageList } from "@/components/app/components/animations";

export default function Lineups() {

    // All Data

    const [data, setData] = useState<LineupDatabase>({
        agents: [] as AgentData[],
        maps: [] as MapData[],
        lineups: [] as LineupData[],
    })

    const [filterData, setFilterData] = useState<LineupDatabase>({
        agents: [],
        maps: [],
        lineups: [],
    })

    const [map, setMap] = useState<string>('All');
    const [agent, setAgent] = useState<string>('All');
    const [ability, setAbility] = useState<string>('');
    const [side, setSide] = useState<string>('Attack');

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
              abilities: match.abilities,
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

    const handleMap = (mapStr: string) => {
        setMap(mapStr);
    }

    const handleAgent = (agentStr: string) => {
        setAgent(agentStr);
    }

    const handleAbility = (abStr: string) => {
        setAbility(abStr);
    }

    const handleSide = (sideStr: string) => {
        setSide(sideStr);
    }

    const fetchData = async () => {
        const fetchedData = await fetchLineup();
        const updatedData = prepareLineups(fetchedData.lineups, fetchedData.agents);
        setData({
            agents: fetchedData.agents,
            maps: fetchedData.maps,
            lineups: updatedData
        })
        setFilterData({
            agents: fetchedData.agents,
            maps: fetchedData.maps,
            lineups: updatedData
        })
    }

    const fetchAndFilterData = () => {

    let updatedLineups = [...data.lineups];

        if (map !== 'All') {
            updatedLineups = updatedLineups.filter(line => line.map === map);
        }

        
        if (agent !== 'All') {
            updatedLineups = updatedLineups.filter(line =>
                line.agents.some(a => a.name === agent)
            ).map(line => ({
                ...line,
                agents: line.agents.filter(a => a.name === agent) // This ensures only matching agents are kept in the data
            }));
        }

        if(ability) {
            updatedLineups = updatedLineups.filter(line =>
                line.agents.some(a => a.name === agent)
            ).map(line => ({
                ...line,
                agents: line.agents.filter(a => a.name === agent).map(agent => ({
                    ...agent,
                    lineups: agent.lineups.filter(l => l.ability)
                }))
            }))
        }

        setFilterData(prevData => ({
            ...prevData,
            lineups: updatedLineups
        }));
    };

    console.log(`${map}, ${ability} and `, filterData.lineups);

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        // const filterAbility = () => {
        //     if(!ability) {
        //         setFilterData(prevData => ({
        //             ...prevData,
        //             lineups: data.lineups
        //         }));
        //     } else {
        //         setFilterData(prevData => ({
        //             ...prevData,
        //             lineups: data.lineups.filter(
        //                 line => line.agents.some(
        //                     line => line.lineups.some(
        //                         l => l.ability ? l.ability === ability : false
        //                     )
        //                 )
        //             )
        //         }))
        //     }
        // }

        // const toggleSide = () => {
        //     setFilterData(prevData => ({
        //         ...prevData,
        //         lineups: data.lineups.filter(
        //             line => line.agents.some(
        //                 l => l.lineups.some(
        //                     s => s.side === side 
        //                 )
        //             )
        //         )
        //     }))
        // }

        fetchAndFilterData();
    }, [map, agent, data.lineups]);
    
    // console.log(`${agent} and `, filterData.lineups);
    // console.log(`New`, filterData.lineups)

    return(
        <motion.section className="flex flex-col items-start justify-center w-full space-y-6"
            variants={pageList}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className="space-y-4" variants={pageItem}>
                <div className="text-2xl xl:text-3xl font-semibold flex flex-row items-center space-x-3 text-valo w-fit">
                    <FontAwesomeIcon icon={faBullseye} /> <span>Lineups</span>
                </div>
                <p className="text-sm xl:text-base text-neutral-300 font-normal leading-relaxed">
                Lineups are an essential resource for players aiming to optimize their agent&apos;s abilities for maximum impact. This page meticulously compiles images and detailed descriptions of precise ability placements for various agents, focusing on strategic advantages across all maps.
                <br />
                From Sova&apos;s recon arrows to Viper&apos;s toxic screens, the content is designed to enhance your tactical approach and ensure your team gains the upper hand. Explore the lineups to discover new, innovative ways to utilize each agent&apos;s kit effectively, bolstering your gameplay and team strategy in Valoran                </p>
            </motion.header>

            <motion.hr variants={pageItem} className="w-full rounded-lg" />
            
            {/* Filters */}
            <motion.div className="w-full" variants={pageItem}>
                <V2Filter selectMap={map} setSelectMap={handleMap} selectAgent={agent} setSelectAgent={handleAgent} selectAbility={ability} setSelectAbility={handleAbility} selectSide={side} setSelectSide={handleSide} />
            </motion.div>
            
            {/* Card Layout */}
            <motion.div className="w-full" variants={pageItem}>
                <LineupList data={filterData} />
            </motion.div>
            

        </motion.section>
    )
}