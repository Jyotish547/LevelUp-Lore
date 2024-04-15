'use client'

import { MapList } from "@/components/app/components/valoComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Maps() {
    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-valo w-fit shadow-md shadow-violet-300/30">
                    <FontAwesomeIcon icon={faMapLocationDot} /> <span>Maps</span>
                </div>
                <p className="text-lg font-normal">
                    Exploring Valorant&apos;s maps offers players a deep dive into the intricate arenas where battles unfold. Each map brings its own unique set of strategic opportunities and challenges, from tight corners for ambushes to open spaces for team skirmishes. Understanding the layout, key sightlines, and objective locations on these maps is crucial for planning effective tactics and outmaneuvering opponents. <br /> Mastery of map knowledge not only enhances gameplay experience but also significantly boosts a team&apos;s chances of securing victory by making informed decisions during intense matches.
                </p>
            </header>

            <hr className="w-full rounded-lg" />
            
            {/* Filters */}
            <div className="flex flex-row space-x-12">

            </div>
            
            {/* Card Layout */}
                <MapList />

        </section>
    )
}