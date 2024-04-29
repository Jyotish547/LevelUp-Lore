'use client'

import { MapList } from "@/components/app/components/valoComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import { motion } from "framer-motion";
import { downChild, pageItem, pageList } from "@/components/app/components/animations";

export default function Vision() {
    return(
        <motion.section className="flex flex-col items-start justify-center w-full space-y-6"
            variants={pageList}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className="space-y-4" variants={pageItem}>
                <div className="text-2xl xl:text-3xl font-semibold flex flex-row items-center space-x-3 text-lol w-fit">
                    <FontAwesomeIcon icon={faMapLocationDot} /> <span>Vision Control</span>
                </div>
                <p className="text-sm xl:text-base text-neutral-300 font-normal leading-relaxed">
                    Dominate the map with interactive warding maps showcasing optimal ward placements for vision control. Learn how to secure objectives, track enemy movements, and gain a strategic advantage with comprehensive guides and tools designed to elevate your warding game.
                </p>
            </motion.header>

            <motion.hr className="w-full rounded-lg" variants={pageItem} />
            
            {/* Card Layout */}
            <motion.div className="w-full h-full flex flex-col space-y-16 items-center justify-center py-16" variants={downChild}>
                <Image src="/assets/emptyContent/lolLoading.svg" alt="Coming Soon" width={500} height={300} />
                <p className="text-xl font-semibold text-lol">Exciting content coming soon! Stay tuned for updates and insightful information to enhance your gaming experience.</p>
            </motion.div>

        </motion.section>
    )
}