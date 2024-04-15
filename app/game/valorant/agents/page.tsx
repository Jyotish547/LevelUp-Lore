'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BorderButton from "@/components/app/components/buttons";
import { faChessBoard, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { AgentList } from "@/components/app/components/valoComp";

export default function Agents() {
    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-valo w-fit shadow-md shadow-violet-300/30">
                    <FontAwesomeIcon icon={faUsersGear} /> <span>Agents</span>
                </div>
                <p className="text-lg font-normal">
                    This is an overview of all the game's characters, detailing their skills and roles. It's a go-to for players looking to master different agents, providing key information on how to best use each one's abilities in battle. This page helps players craft strategies and improve their play, making it a vital tool for anyone aiming to excel in Valorant.
                </p>
            </header>

            <hr className="w-full rounded-lg" />
            
            {/* Filters */}
            <div className="flex flex-row space-x-12">

            </div>
            
            {/* Card Layout */}
                <AgentList />

        </section>
    )
}