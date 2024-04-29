'use client'

import { MapList } from "@/components/app/components/valoComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import { motion } from "framer-motion";
import { downChild, pageItem, pageList } from "@/components/app/components/animations";

export default function MapTactics() {
    return(
        <motion.section className="flex flex-col items-start justify-center w-full space-y-6"
            variants={pageList}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className="space-y-4" variants={pageItem}>
                <div className="text-2xl xl:text-3xl font-semibold flex flex-row items-center space-x-3 text-cs2 w-fit">
                    <FontAwesomeIcon icon={faMapLocationDot} /> <span>Map Tactics</span>
                </div>
                <p className="text-sm xl:text-base text-neutral-300 font-normal leading-relaxed">
                    An extensive library of detailed breakdowns for every map in Counter Strike: Global Offensive. Each map page includes callouts, strategies for both Terrorists and Counter-Terrorists, and key smoke/nade spots to control and dominate the map.
                </p>
            </motion.header>

            <motion.hr className="w-full rounded-lg" variants={pageItem} />
            
            {/* Card Layout */}
            <motion.div className="w-full h-full flex flex-col space-y-16 items-center justify-center py-16" variants={downChild}>
                <Image src="/assets/emptyContent/cs2Loading.svg" alt="Coming Soon" width={500} height={300} />
                <p className="text-xl font-semibold text-cs2">Exciting content coming soon! Stay tuned for updates and insightful information to enhance your gaming experience.</p>
            </motion.div>

        </motion.section>
    )
}