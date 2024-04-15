'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faBullseye } from "@fortawesome/free-solid-svg-icons";

import { LineupList } from "@/components/app/components/valoComp";

import { fetchLineup } from "@/components/pages/api/valorant/allLineups";



import { useEffect, useState } from "react";

export default function Lineups() {

    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-valo w-fit shadow-md shadow-violet-300/30">
                    <FontAwesomeIcon icon={faBullseye} /> <span>Lineups</span>
                </div>
                <p className="text-lg font-normal">
                Lineups are an essential resource for players aiming to optimize their agent's abilities for maximum impact. This page meticulously compiles images and detailed descriptions of precise ability placements for various agents, focusing on strategic advantages across all maps.
                <br />
                From Sova's recon arrows to Viper's toxic screens, the content is designed to enhance your tactical approach and ensure your team gains the upper hand. Explore the lineups to discover new, innovative ways to utilize each agent's kit effectively, bolstering your gameplay and team strategy in Valoran                </p>
            </header>

            <hr className="w-full rounded-lg" />
            
            {/* Filters */}
            <div className="flex flex-row space-x-12">

            </div>
            
            {/* Card Layout */}
            <LineupList />

        </section>
    )
}