"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";

import { PlayersData } from "@/components/app/components/types/fc24Type";
import { useEffect, useState } from "react";

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { SkillMoves } from "@/components/app/components/cardLayouts";

export default function TopCardsFC() {

    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-eafc w-fit shadow-md shadow-green-300/30">
                    <FontAwesomeIcon icon={faRankingStar} /> <span>Skill Moves</span>
                </div>
                <p className="text-lg font-normal">
                This an essential guide for players seeking to improve their gameplay through effective dribbling and skillful maneuvers. It features a variety of moves rated from basic to advanced, complete with star levels and specific controller commands for seamless execution.
                <br />
                This resource aims to equip gamers with the techniques needed to navigate past opponents with ease, enhancing the tactical depth and enjoyment of matches. By mastering these skills, players can significantly boost their team&apos;s performance and enjoy a more dynamic and engaging football experience in EA FC 24.
                </p>
            </header>

            <hr className="w-full rounded-lg" />

            <div className="w-full">
                {/* Filter Div */}
                <div>

                </div>

                <SkillMoves />
            </div>
        </section>
    )
}