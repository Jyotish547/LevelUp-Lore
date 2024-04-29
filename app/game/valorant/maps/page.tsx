'use client'

import { MapList } from "@/components/app/components/valoComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { pageItem, pageList } from "@/components/app/components/animations";

export default function Maps() {
    return(
        <motion.section className="flex flex-col items-start justify-center w-full space-y-6"
            variants={pageList}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className="space-y-4" variants={pageItem}>
                <div className="text-2xl xl:text-3xl font-semibold flex flex-row items-center space-x-3 text-valo w-fit">
                    <FontAwesomeIcon icon={faMapLocationDot} /> <span>Maps</span>
                </div>
                <p className="text-sm xl:text-base text-neutral-300 font-normal leading-relaxed">
                    Exploring Valorant&apos;s maps offers players a deep dive into the intricate arenas where battles unfold. Each map brings its own unique set of strategic opportunities and challenges, from tight corners for ambushes to open spaces for team skirmishes. Understanding the layout, key sightlines, and objective locations on these maps is crucial for planning effective tactics and outmaneuvering opponents. <br /> Mastery of map knowledge not only enhances gameplay experience but also significantly boosts a team&apos;s chances of securing victory by making informed decisions during intense matches.
                </p>
            </motion.header>

            <motion.hr className="w-full rounded-lg" variants={pageItem} />
            
            {/* Card Layout */}
            <motion.div className="w-full" variants={pageItem}>
                <MapList />
            </motion.div>
            

        </motion.section>
    )
}