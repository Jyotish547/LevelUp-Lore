"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";

import { GenType, PlayersData } from "@/components/app/components/types/fc24Type";
import { useEffect, useState } from "react";

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { PlayerCards } from "@/components/app/components/cardLayouts";
import { F2Filter } from "@/components/app/components/filterComp";

import { LeagueFilter } from "@/components/app/components/types/fc24Type";

import { motion } from "framer-motion";
import { pageItem, pageList } from "@/components/app/components/animations"; 

export default function TopCardsFC() {

    const [playerData, setPlayerData] = useState<PlayersData[]>([]);

    const [gen, setGen] = useState<string>('All');
    const [leagueData, setLeagueData] = useState<LeagueFilter>({
        clubs: [],
        leagues: [],
        nations: []
      });

    const [filteredData, setFilteredData] = useState<PlayersData[]>([]);

    const handleSetGen = (genStr: string) => {
        setGen(genStr as GenType);
    };

    // Fetch for filter

    useEffect(() => {
        const fetchPlayerData = async () => {
            try {
                const response = await axios.get<{items: PlayersData[]}, any>(`/api/allTopCards`);
                setPlayerData(response.data.items);
                setFilteredData(response.data.items);
            }
            catch(error) {
                console.log('Error fetching players data:', error);
            }
        };

        const fetchLeagueData = async() => {
            try {
                const response = await axios.get<LeagueFilter>(`/api/fc24/allFilters`);
                setLeagueData(response.data);
            }
            catch(error) {
                console.log('Error fetching leagues data:', error);
            }
        }
        

        fetchPlayerData();
        // fetchLeagueData();
    }, []);

    // Filter functions

    useEffect(() => {
        // Gender
        const filterGen = () => {
            if (gen === 'All' || !gen) {
                setFilteredData(playerData);
                // console.log(filteredData);
            } else {
                setFilteredData(playerData.filter(player => gen.includes(player.gender.label)));
            }
        };

        

        // Implementation
        filterGen();
    }, [gen]);

    // Filtered Data

    // useEffect(() => {
    //     setFilteredData(playerData.filter(player => 
    //         // Add filters here
    //         (gen ? player.gender.label === gen : true)
    //     ))
    // })

    // console.log(gen);

    // console.log(filteredData);

    return(
        <motion.section className="flex flex-col items-start justify-center w-full space-y-6"
            variants={pageList}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className="space-y-4" variants={pageItem}>
                <div className="text-2xl xl:text-3xl font-semibold flex flex-row items-center space-x-3 text-eafc w-fit">
                    <FontAwesomeIcon icon={faRankingStar} /> <span>Top Players</span>
                </div>
                <p className="text-sm xl:text-base text-neutral-300 font-normal leading-relaxed">
                    Coveted for their ability to enhance gameplay, these high-caliber cards offer a powerful mix of speed, strength, and skill, mirroring the players&apos; real-world performances. <br /> As a strategic guide for building an ultimate team, this page points gamers toward the star athletes capable of changing the course of any match. It&apos;s an essential resource for players aiming to gain an edge in EA FC 24 competitions.
                </p>
            </motion.header>

            
            <motion.hr className="w-full rounded-lg" variants={pageItem} />

            <motion.div variants={pageItem} className="w-full h-fit flex justify-between">
                <F2Filter gen={gen} setGen={handleSetGen} />
            </motion.div>

            <motion.div variants={pageItem} className="w-full h-fit">
                <PlayerCards items={filteredData}  />
            </motion.div>
        </motion.section>
    )
}