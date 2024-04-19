"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";

import { GenType, PlayersData } from "@/components/app/components/types/fc24Type";
import { useEffect, useState } from "react";

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { PlayerCards } from "@/components/app/components/cardLayouts";
import { F2Filter } from "@/components/app/components/filterComp";

export default function TopCardsFC() {

    const [playerData, setPlayerData] = useState<PlayersData[]>([]);
    const [gen, setGen] = useState<GenType>(GenType.All);
    const [filteredData, setFilteredData] = useState<PlayersData[]>([]);

    const handleSetGen = (genStr: string) => {
        setGen(genStr as GenType);
    };

    useEffect(() => {
        const fetchPlayerData = async () => {
            try {
                const response = await axios.get<{items: PlayersData[]}, any>(`/api/allTopCards`);
                setPlayerData(response.data.items);
                // console.log(playerData[0].playStyle);
            }
            catch(error) {
                console.log('Error fetching players data:', error);
            }
        };
        fetchPlayerData();
    }, []);

    useEffect(() => {
        setFilteredData(playerData.filter(player => 
            // Add filters here
            (gen ? player.gender.label === gen : true)
        ))
    })

    // useEffect(() => {
    //     const fetchPlayerData = async () => {
    //         try {
    //             const response = await axios.get<{items: PlayersData[]}, any>(`/api/allTopCards`);
    //             setPlayerData(response.data.items);
    //             // console.log(response.data.items[5])
    //         }
    //         catch(error) {
    //             console.log('Error fetching players data:', error);
    //         }
    //     };
    //     fetchPlayerData();
    // });

    useEffect(() => {
        const filterData = () => {
            if (gen === 'All') {
                setFilteredData(playerData);
            } else {
                setFilteredData(playerData.filter(player => gen.includes(player.gender.label)));
            }
        };
        filterData();
    }, [gen, filteredData]);

    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
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

            <F2Filter setGen={handleSetGen} />

            <PlayerCards items={filteredData}  />
        </section>
    )
}