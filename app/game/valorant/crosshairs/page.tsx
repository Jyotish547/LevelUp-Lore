'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BorderButton from "@/components/app/components/buttons";
import { faChessBoard, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { CrosshairList } from "@/components/app/components/valoComp";

export default function Crosshairs() {
    return(
        <section className="flex flex-col items-start justify-center w-full space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 w-fit text-valo">
                    <FontAwesomeIcon icon={faCrosshairs} /> <span>Crosshairs</span>
                </div>
                <p className="text-base text-neutral-300 font-normal leading-relaxed">
                    Check out the most impressive crosshairs in Valorant from pro players and the community.                </p>
            </header>

            <hr className="w-full rounded-lg" />
            
            {/* Card Layout */}
            <CrosshairList />

        </section>
    )
}