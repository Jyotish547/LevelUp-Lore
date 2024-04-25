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
        <section className="flex flex-col items-start justify-center w-full space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-eafc w-fit shadow-md shadow-green-300/30">
                    <FontAwesomeIcon icon={faRankingStar} /> <span>Top Players</span>
                </div>
                <p className="text-lg font-normal">
                    Coveted for their ability to enhance gameplay, these high-caliber cards offer a powerful mix of speed, strength, and skill, mirroring the players&apos; real-world performances. <br /> As a strategic guide for building an ultimate team, this page points gamers toward the star athletes capable of changing the course of any match. It&apos;s an essential resource for players aiming to gain an edge in EA FC 24 competitions.
                </p>
            </header>

            <hr className="w-full rounded-lg" />

            <F2Filter gen={gen} setGen={handleSetGen} />

            <PlayerCards items={filteredData}  />
        </section>
    )
}