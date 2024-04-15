'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BorderButton from "@/components/app/components/buttons";
import { faChessBoard, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { CrosshairList } from "@/components/app/components/valoComp";

export default function Crosshairs() {
    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-valo w-fit shadow-md shadow-violet-300/30">
                    <FontAwesomeIcon icon={faCrosshairs} /> <span>Crosshairs</span>
                </div>
                <p className="text-lg font-normal">
                    Check out the most impressive crosshairs in Valorant from pro players and the community.                </p>
            </header>

            <hr className="w-full rounded-lg" />
            
            {/* Filters */}
            <div className="flex flex-row space-x-12">

            </div>
            
            {/* Card Layout */}
            <CrosshairList />

        </section>
    )
}